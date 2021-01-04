import {Left} from '../';
import {ThrottleForm} from '@forms/';
import styles from './Content.module.css';

export function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Left />
      </div>
      <div className={styles.rightSide}>
        <ThrottleForm />
      </div>
    </div>
  );
}
