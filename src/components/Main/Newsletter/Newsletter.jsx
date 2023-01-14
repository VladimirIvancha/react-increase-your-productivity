import React, { useState, useEffect } from "react";
import HpTextArea from "../../TextAreas/H-p/HpTextArea";
import { newsletterHpTextArea } from "../../../utils/initial-data";
import TextInput from "../../../utils/TextInput";
import useFormValidation from "../../../utils/useFormValidation";
import ActionButton from "../../Buttons/Action/ActionButton";
import PageLine from "../../Shapes/Lines/PageLine";

function Newsletter() {
  const form = useFormValidation();
  const [disabled, setDisabled] = useState(true);
  const [placeholder, setPlaceholder] = useState("Email address");

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    form.resetForm();
    setPlaceholder("E-mail succesfully saved");
  }
  useEffect(() => {
    setDisabled(!form.isValid);
  }, [form.values]);

  return (
    <section className="newsletter" id="newsletter">
      <div className="newsletter__container">
        <HpTextArea data={newsletterHpTextArea} />
        <form
          className="form newsletter__form"
          id="sign_up"
          name="sign_up"
          onSubmit={handleSubmit}
          noValidate
        >
          <TextInput
            labelClassName="newsletter__label"
            inputClassName="newsletter__input"
            errorClassName="newsletter__input-error newsletter__input-error_active"
            name="email"
            type="email"
            placeholder={placeholder}
            pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
            value={form.values.email || ""}
            onChange={form.handleChange}
            errorMessage={form.errors.email}
          />
          <ActionButton
            name={"Save me"}
            className={`newsletter__btn ${
              disabled && "newsletter__btn_disabled"
            }`}
            type="submit"
            onClick={handleSubmit}
            disabled={disabled}
          />
        </form>
      </div>
      <PageLine id={"newsletter-pageLine"} />
    </section>
  );
}

export default Newsletter;
