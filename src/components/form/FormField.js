import React from 'react';
import './FormField.css';

const FormField = ({
  input,
  label,
  type,
  meta: { asyncValidating, touched, error }
}) =>
  <div className="form-field">
    <input
      className="form-field__input"
      {...input}
      type={type}
      placeholder={label}
    />
    {touched &&
      error &&
      <span className="form-field__error">
        {error}
      </span>}
  </div>;

export default FormField;
