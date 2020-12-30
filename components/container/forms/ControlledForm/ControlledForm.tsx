import { useState, useEffect, useLayoutEffect } from "react";
import {useCountRender, useEventEmitter} from "@hooks";
import {ControlledInput} from "@ui";
import styles from './ControlledForm.module.css';

export function ControlledForm() {
    const [formState, updateFormState] = useState({
        firstName: "",
        lastName: "",
        address: "",
    });

    const {newEvent} = useEventEmitter();
    // imitation of reference logic of left component 
    useLayoutEffect(() => {
        newEvent({nameEvent: "update_form_state", data: formState});
    });

    const onChangeControl = (controlName: string, controlValue: any) => {
        let data = {...formState};
        data[controlName] = controlValue;
        updateFormState(data);
    };
    const getValueControl = (controlName: string) => {
        return formState[controlName];
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    // count of render
    const {getCountRender, counter} = useCountRender();
    counter();
    // count of render [END]

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>Count of render: {getCountRender()}</div>
            <h3>Component B - used controlled components inside</h3>
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