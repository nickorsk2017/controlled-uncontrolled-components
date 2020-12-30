import {useRef} from "react";
import styles from './TextInput.module.css';

export function TextInput(props) {
    const {onChange, value, label} = props;
    let timerHandler = null;
    const inputRef = useRef(null);

    if(inputRef.current && value !== inputRef.current.value){
      inputRef.current.value = value;
    }
    const onChangeHandler = (e) => {
      clearTimeout(timerHandler);
      const cachedValue = e.target.value;
      timerHandler = setTimeout(() => {
        onChange(cachedValue);
      }, 300);
    }
    const onBlur = (e) => {
      clearTimeout(timerHandler);
      onChange(e.target.value);
    }
    return (
      <div className={styles.textInput}>
        {label && <label className={styles.label}>{label}</label>}
        <input className={styles.input} onBlur={onBlur} onChange={onChangeHandler} defaultValue={value} ref={inputRef}/>
      </div>
    )
}
  