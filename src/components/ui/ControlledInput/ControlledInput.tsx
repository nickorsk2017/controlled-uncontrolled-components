import styles from './ControlledInput.module.scss';

export interface ComponentProps {
  onChange: (value: string) => void;
  value: string;
  label: string;
}

export const ControlledInput: React.FC<ComponentProps> = (props) => {
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
};
