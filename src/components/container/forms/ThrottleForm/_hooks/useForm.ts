import {FormValue} from '../types';

type OnChangeControl = (controlName: string, controlValue: string) => void;
type GetValueControl = (controlName: string) => string;

export function useForm(formState: FormValue, updateFormState: (data: FormValue) => void): {onChangeControl: OnChangeControl; getValueControl: GetValueControl} {
  const onChangeControl: OnChangeControl = (controlName, controlValue) => {
    const data = {...formState};
    data[controlName] = controlValue;
    updateFormState(data);
  };
  const getValueControl: GetValueControl = (controlName: string) => {
    return formState[controlName];
  };
  return {onChangeControl, getValueControl};
}
