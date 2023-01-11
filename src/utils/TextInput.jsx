import React from 'react';

function TextInput({
  name, type, value, onChange, errorMessage, pattern, className,
}) {

  return (
    <label className="loginregform__label" htmlFor={name}>
      <input
        className={className} // loginregform__input
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        pattern={pattern}
        required
      />
      <span className="form__input-error form__input-error_active">{errorMessage}</span>
    </label>
  );
}

export default TextInput;
