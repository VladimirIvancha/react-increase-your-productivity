import React, { useState, useEffect } from "react";
import HpTextArea from "../../TextAreas/H-p/HpTextArea";
import { newsletterHpTextArea } from "../../../utils/initial-data";
import TextInput from "../../../utils/TextInput";
import useFormValidation from "../../../utils/useFormValidation";
import ActionButton from "../../Buttons/Action/ActionButton";

function Newsletter() {
  const form = useFormValidation();
  const [disabled, setDisabled] = useState(true);
  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
  }
  useEffect(() => {
    setDisabled(!form.isValid);
  }, [form.values]);

  return (
    <section className="newsletter">
      <HpTextArea data={newsletterHpTextArea} />
      <form
        className="newsletter__form"
        id="sign_up"
        name="sign_up"
        onSubmit={handleSubmit}
        noValidate
      >
        <TextInput
          className="newsletter__input"
          name="email"
          type="email"
          pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
          value={form.values.email || ""}
          onChange={form.handleChange}
          errorMessage={form.errors.email}
        />
        <ActionButton 
            name={"Save me"} 
            className={"newsletter__btn"} 
            type="submit" 
            onClick={handleSubmit}
            disabled={disabled}
        />
      </form>
    </section>
  );
}

export default Newsletter;
