import {useState, useLayoutEffect} from 'react';
import {useCountRender, useEventEmitter} from '@hooks';
import {useForm} from './_hooks';
import {ControlledInput} from '@ui';
import {FormValue} from './types';
import styles from './ControlledForm.module.css';

export function ControlledForm(): JSX.Element {
  const [formState, updateFormState] = useState<FormValue>({
    firstName: '',
    lastName: '',
    address: ''
  });
  const {onChangeControl, getValueControl} = useForm(formState, updateFormState);

  const {newEvent} = useEventEmitter();
  // imitation of reference logic of left component
  useLayoutEffect(() => {
    newEvent<FormValue>({nameEvent: 'update_form_state', data: formState});
  });

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const message = Object.keys(formState).reduce((message: string, controlName: string) => {
      const value: string = formState[controlName] || '';
      return message + `${controlName}: ${value}\n`;
    }, 'FORM RESULT:\n');
    alert(message);
  };

  // count of render
  const {getCountRender, counter} = useCountRender();
  counter();
  // count of render [END]

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>Count of render: {getCountRender()}</div>
      <h3>
        The component B <br />
      </h3>
      <p>
        This form uses <u>controlled</u> components inside. <br /> The value of form will update each time on changing and it will be touch the react app
      </p>
      <ControlledInput label={'First name'} value={getValueControl('firstName')} onChange={(value: string): void => onChangeControl('firstName', value)} />
      <ControlledInput label={'Last name'} value={getValueControl('lastName')} onChange={(value: string): void => onChangeControl('lastName', value)} />
      <ControlledInput label={'Address'} value={getValueControl('address')} onChange={(value: string): void => onChangeControl('address', value)} />
      <button className={styles.submit} type='submit'>
        Get value
      </button>
    </form>
  );
}
