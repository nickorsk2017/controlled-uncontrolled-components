import {RefInputs, FormValue} from '../types';

type GetInputvalue = (controlNameRef: string) => string | null;
type GetFormData = () => FormValue;

export function useForm(refInputs: RefInputs): {getInputvalue: GetInputvalue; getFormData: GetFormData} {
  const getInputvalue: GetInputvalue = (controlNameRef: string) => {
    const element = refInputs[controlNameRef];
    if (element) {
      return element.value;
    }
    return null;
  };
  const getFormData: GetFormData = () => {
    return Object.keys(refInputs).reduce((formData, controlNameRef) => {
      return {
        ...formData,
        [controlNameRef.replace('Ref', '')]: getInputvalue(controlNameRef)
      };
    }, {});
  };
  return {getInputvalue, getFormData};
}
