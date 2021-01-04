import styles from './ControlledInput.module.scss';

export function ControlledInput(props: {onChange: (value: string) => void; value: string; label: string}): JSX.Element {
  const {onChange, value, label} = props;
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };
  return (
    <div className={styles.textInput}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} onChange={onChangeHandler} value={value} />
    </div>
  );
}
