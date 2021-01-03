export function useForm(refInputs) {
  const getInputvalue = (controlNameRef: string) => {
    const element = refInputs[controlNameRef];
    if (element) {
      return element.value;
    }
    return null;
  };
  const getFormData = () => {
    return Object.keys(refInputs).reduce((formData, controlNameRef) => {
      return {
        ...formData,
        [controlNameRef.replace("Ref", "")]: getInputvalue(controlNameRef),
      };
    }, {});
  };
  return { getInputvalue, getFormData };
}
