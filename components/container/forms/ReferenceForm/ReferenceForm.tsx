import { useLayoutEffect } from "react";
import {useCountRender, useEventEmitter} from "@hooks";
import {useForm} from "./_hooks";
import {ReferenceInput} from "@ui";
import styles from './ReferenceForm.module.css';

export function ReferenceForm() {
    let refInputs = {
        firstNameRef: null,
        lastNameRef: null,
        addressRef: null,
    };
    const {getFormData} = useForm(refInputs);
    const {newEvent} = useEventEmitter();
    // imitation of reference logic of left component 
    useLayoutEffect(() => {
        newEvent({nameEvent: "update_form_state", data: getFormData()});
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = getFormData();
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
            <p>This form uses <u>uncontrolled-reference</u> components inside.<br/> The reference components dont touch the react app, it should be manually. </p>
            <ReferenceInput
                label={"First name"}
                _ref={(ref) => refInputs.firstNameRef = ref}
            />
             <ReferenceInput
                label={"Last name"}
                _ref={(ref) => refInputs.lastNameRef = ref}
            />
            <ReferenceInput
                label={"Address"}
                _ref={(ref) => refInputs.addressRef = ref}
            />
            <button className={styles.submit} type="submit">Get value</button>
        </form>
    )
}