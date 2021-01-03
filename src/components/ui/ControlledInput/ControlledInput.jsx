import { useRef } from 'react'
import styles from './ControlledInput.module.css'

export function ControlledInput(props) {
  const { onChange, value, label } = props
  const onChangeHandler = (e) => {
    onChange(e.target.value)
  }
  return (
    <div className={styles.textInput}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={styles.input}
        onChange={onChangeHandler}
        value={value}
      />
    </div>
  )
}
