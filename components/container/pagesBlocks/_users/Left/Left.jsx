import { useState, useEffect } from "react";
import styles from './Left.module.css';
import {useCountRender, useEventEmitter} from "@hooks";

export function Left() {
  const [countEvent, updateCountEvent] = useState(0);
  const {subscribeEvent} = useEventEmitter();

  useEffect(() => {
    subscribeEvent({nameEvent: "update_form_state", callback: () => {
      updateCountEvent(countEvent + 1);
    }});
    //unsubscribes run automaticly
  }, [countEvent]);


  // count of render
  const {getCountRender, counter} = useCountRender();
  counter();
  // count of render [END]
    
  return (
      <div className={styles.list}>
        <div>Count of render: {getCountRender()}</div>
        <h3>Component A</h3>
        <article>
          This component has ralated logic with component B (the imitation).<br/>
          It can be a storage managment or some events.<br/>
          That can be generate a negative effects for performance.<br/><br/>
          Three types of components (controlled, uncontrolled-throttling, uncontrolled-reference) work different. 
          <br/><br/>The count of render demonstrate it!
        </article>

      </div>
    )
  }
  