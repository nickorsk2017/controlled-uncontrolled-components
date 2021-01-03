import { useRef } from 'react'
import { useReference } from './_hooks'
import styles from './ReferenceInput.module.css'

export function ReferenceInput(props) {
  const { _ref, label } = props

  return (
    <div className={styles.textInput}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} ref={_ref} />
    </div>
  )
}
