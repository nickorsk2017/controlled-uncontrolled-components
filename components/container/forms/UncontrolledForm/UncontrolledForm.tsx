import { useState, useMemo } from "react";
import {useCountRender} from "@hooks";
import {ControlledInput} from "@ui";
import styles from './UncontrolledForm.module.css';

export function UncontrolledForm() {
    const [formState, updateFormState] = useState({
        firstName: "",
        lastName: "",
        address: "",
    });
    const onChangeControl = (controlName: string, controlValue: any) => {
        let data = {...formState};
        data[controlName] = controlValue;
        updateFormState(data);
    };
    const getValueControl = (controlName: string) => {
        return formState[controlName];
    };
    const handleSubmit = () => {
        console.log(formState, 'formState!');
    };
    // count of render
    const {getCountRender, counter} = useCountRender();
    counter();
    // count of render [END]

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>Count of render: {getCountRender()}</div>
            <ControlledInput
                label={"First name"}
                value={getValueControl("firstName")}
                onChange={(value) => onChangeControl("firstName", value)}
            />
             <ControlledInput
                label={"Last name"}
                value={getValueControl("lastName")}
                onChange={(value) => onChangeControl("lastName", value)}
            />
            <ControlledInput
                label={"Address"}
                value={getValueControl("address")}
                onChange={(value) => onChangeControl("address", value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
}