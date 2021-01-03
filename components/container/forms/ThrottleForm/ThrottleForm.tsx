import { useState, useLayoutEffect } from "react";
import {useCountRender, useEventEmitter} from "@hooks";
import {ThrottleInput} from "@ui";
import {useForm} from "./_hooks";
import styles from './ThrottleForm.module.css';

export function ThrottleForm() {
    const [formState, updateFormState] = useState({
        firstName: "",
        lastName: "",
        address: "",
    });
    const {onChangeControl, getValueControl} = useForm(formState, updateFormState);

    const {newEvent} = useEventEmitter();
    // imitation of reference logic of left component 
    useLayoutEffect(() => {
        newEvent({nameEvent: "update_form_state", data: formState});
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = formState;
        const message = Object.keys(formData).reduce((message, controlName) => { return message + `${controlName}: ${formData[controlName]}\n`}, "FORM RESULT:\n");
        alert(message);
    };
    
    // count of render
    const {getCountRender, counter} = useCountRender();
    counter();
    // count of render [END]

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>Count of render: {getCountRender()}</div>
            <h3>The component B <br/></h3> 
            <p>This form uses <u>uncontrolled-throttle</u> components inside.<br/> The value of form will update after 300 ms and it will touch the react app.</p>
            <ThrottleInput
                label={"First name"}
                value={getValueControl("firstName")}
                onChange={(value) => onChangeControl("firstName", value)}
            />
             <ThrottleInput
                label={"Last name"}
                value={getValueControl("lastName")}
                onChange={(value) => onChangeControl("lastName", value)}
            />
            <ThrottleInput
                label={"Address"}
                value={getValueControl("address")}
                onChange={(value) => onChangeControl("address", value)}
            />
            <button className={styles.submit} type="submit">Get value</button>
        </form>
    )
}