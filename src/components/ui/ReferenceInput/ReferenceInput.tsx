import styles from './ReferenceInput.module.scss';

export interface ComponentProps {
  _ref: (ref: HTMLInputElement) => void;
  label: string;
}

export const ReferenceInput: React.FC<ComponentProps> = (props) => {
  const {_ref, label} = props;

  return (
    <div className={styles.textInput}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} ref={_ref} />
    </div>
  );
};
