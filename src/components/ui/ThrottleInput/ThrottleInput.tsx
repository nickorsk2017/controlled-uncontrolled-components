import {useThrottle} from './_hooks';
import styles from './ThrottleInput.module.scss';

export function ThrottleInput(props: {onChange: (value: string) => void; value: string; label: string}): JSX.Element {
  const {onChange, value, label} = props;
  const {onBlurThrottle, onChangeThrottle, updateValueThrottle} = useThrottle({
    callback: onChange
  });
  const inputRef = updateValueThrottle(value);

  return (
    <div className={styles.textInput}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} onBlur={(e: React.ChangeEvent<HTMLInputElement>): void => onBlurThrottle(e, value)} onChange={onChangeThrottle} defaultValue={value} ref={inputRef} />
    </div>
  );
}
