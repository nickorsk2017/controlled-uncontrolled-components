import {useRef} from "react";
import {useThrottle} from "./_hooks";
import styles from './ThrottleInput.module.css';

export function ThrottleInput(props) {
    const {onChange, value, label} = props;
    const {onBlurThrottle, onChangeThrottle, updateValueThrottle} = useThrottle({callback: onChange});
    const inputRef = updateValueThrottle(value);

    return (
      <div className={styles.textInput}>
        {label && <label className={styles.label}>{label}</label>}
        <input className={styles.input} onBlur={(e) => onBlurThrottle(e, value)} onChange={onChangeThrottle} defaultValue={value} ref={inputRef}/>
      </div>
    )
}
  