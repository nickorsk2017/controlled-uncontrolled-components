import { Left } from '../'
import { ReferenceForm } from '@forms/'
import styles from './Content.module.css'

export function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Left />
      </div>
      <div className={styles.rightSide}>
        <ReferenceForm />
      </div>
    </div>
  )
}
