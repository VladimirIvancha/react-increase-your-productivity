import React from 'react';

function TextInput({
  name, 
  type, 
  value, 
  onChange, 
  errorMessage, 
  pattern,
  inputClassName, 
  placeholder, 
  labelClassName, 
  errorClassName,
}) {

  return (
    <label className={labelClassName} htmlFor={name}>
      <input
        className={inputClassName}
        name={name}
        id={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        pattern={pattern}
        required
      />
      <span className={errorClassName}>{errorMessage}</span>
    </label>
  );
}

export default TextInput;
