import { useState, useLayoutEffect } from "react";
import { useCountRender, useEventEmitter } from "@hooks";
import { useForm } from "./_hooks";
import { ControlledInput } from "@ui";
import styles from "./ControlledForm.module.css";

export function ControlledForm() {
  const [formState, updateFormState] = useState({
    firstName: "",
    lastName: "",
    address: "",
  });
  const { onChangeControl, getValueControl } = useForm(
    formState,
    updateFormState
  );

  const { newEvent } = useEventEmitter();
  // imitation of reference logic of left component
  useLayoutEffect(() => {
    newEvent({ nameEvent: "update_form_state", data: formState });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = formState;
    const message = Object.keys(formData).reduce((message, controlName) => {
      return message + `${controlName}: ${formData[controlName]}\n`;
    }, "FORM RESULT:\n");
    alert(message);
  };

  // count of render
  const { getCountRender, counter } = useCountRender();
  counter();
  // count of render [END]

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>Count of render: {getCountRender()}</div>
      <h3>
        The component B <br />
      </h3>
      <p>
        This form uses <u>controlled</u> components inside. <br /> The value of
        form will update each time on changing and it will be touch the react
        app
      </p>
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
      <button className={styles.submit} type="submit">
        Get value
      </button>
    </form>
  );
}
