export function useForm(formState, updateFormState) {
  const onChangeControl = (controlName: string, controlValue: any) => {
    const data = { ...formState };
    data[controlName] = controlValue;
    updateFormState(data);
  };
  const getValueControl = (controlName: string) => {
    return formState[controlName];
  };
  return { onChangeControl, getValueControl };
}
