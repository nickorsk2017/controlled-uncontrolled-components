import styles from './ReferenceInput.module.scss';

export function ReferenceInput(props: {_ref: (ref: HTMLInputElement) => void; label: string}): JSX.Element {
  const {_ref, label} = props;

  return (
    <div className={styles.textInput}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} ref={_ref} />
    </div>
  );
}
