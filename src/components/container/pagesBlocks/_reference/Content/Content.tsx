import {Left} from '..';
import {ReferenceForm} from '@forms';
import styles from './Content.module.scss';

export function Content(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Left />
      </div>
      <div className={styles.rightSide}>
        <ReferenceForm />
      </div>
    </div>
  );
}
