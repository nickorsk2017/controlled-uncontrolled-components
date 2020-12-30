// working only with client side, 
// sure that use it in the componentDidMount or useEfect hook.
import { useMemo, useEffect } from "react";

export const useEventEmitter = () => {
    const api = useMemo(() => {
        let events = [];
        const addEvent = ({nameEvent, callback}) => {
            events.push({
                callback,
                nameEvent
            });
        };
        const newEvent = ({nameEvent, data}) => {
            const event = new CustomEvent(nameEvent, {
                detail: {
                    data
                }
            });
            window.dispatchEvent(event);
        };
        const subscribeEvent = ({nameEvent, callback}) => {
            window.addEventListener(nameEvent, callback);
            addEvent({nameEvent, callback});
            return callback;
        };
        const unSubscribeEvent = ({nameEvent, callback}) => {
            window.removeEventListener(nameEvent, callback);
            events = events.filter((event) => {
                return event.callback !== callback
            });
        };
        const unSubscribeAllEvents = () => {
            events = events.filter((event) => {
                window.removeEventListener(event.nameEvent, event.callback);
                return false;
            });
        };
        return {newEvent, subscribeEvent, unSubscribeEvent, unSubscribeAllEvents};
    }, []);
    useEffect(() => {
      return () => {
        api.unSubscribeAllEvents();
      }
    }, [api]);
    return api;
}