import {useRef} from "react";
import styles from './NotControlledInput.module.css';

export function NotControlledInput(props) {
    const {error, refMod, label} = props;
    return (
      <div className={styles.textInput}>
        {label && <label className={styles.label}>{label}</label>}
        <input className={styles.input} ref={refMod}/>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    )
}
  