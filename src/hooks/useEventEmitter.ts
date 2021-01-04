// working only with client side,
// sure that use it in the componentDidMount or useEfect hook.
import {useMemo, useEffect} from 'react';
type AddEvent = ({nameEvent, callback}: {nameEvent: string; callback: EventListener}) => void;
type NewEvent = <T>({nameEvent, data}: {nameEvent: string; data: T}) => void;
type SubscribeEvent = ({nameEvent, callback}: {nameEvent: string; callback: EventListener}) => EventListener;
type UnSubscribeEvent = ({nameEvent, callback}: {nameEvent: string; callback: EventListener}) => void;
type UnSubscribeAllEvents = () => void;
type API = {newEvent: NewEvent; subscribeEvent: SubscribeEvent; unSubscribeEvent: UnSubscribeEvent; unSubscribeAllEvents: UnSubscribeAllEvents};

export const useEventEmitter = (): API => {
  const api: API = useMemo(() => {
    let events: Array<{nameEvent: string; callback: EventListener}> = [];
    const addEvent: AddEvent = ({nameEvent, callback}) => {
      events.push({
        callback,
        nameEvent
      });
    };
    const newEvent: NewEvent = ({nameEvent, data}) => {
      const event = new CustomEvent(nameEvent, {
        detail: {
          data
        }
      });
      window.dispatchEvent(event);
    };
    const subscribeEvent: SubscribeEvent = ({nameEvent, callback}) => {
      window.addEventListener(nameEvent, callback as EventListener);
      addEvent({nameEvent, callback});
      return callback;
    };
    const unSubscribeEvent: UnSubscribeEvent = ({nameEvent, callback}) => {
      window.removeEventListener(nameEvent, callback);
      events = events.filter((event) => {
        return event.callback !== callback;
      });
    };
    const unSubscribeAllEvents: UnSubscribeAllEvents = () => {
      events = events.filter((event) => {
        window.removeEventListener(event.nameEvent, event.callback);
        return false;
      });
    };
    return {newEvent, subscribeEvent, unSubscribeEvent, unSubscribeAllEvents};
  }, []);
  useEffect(() => {
    return (): void => {
      api.unSubscribeAllEvents();
    };
  }, [api]);
  return api;
};
