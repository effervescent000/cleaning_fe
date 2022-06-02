import React from "react";
import { Field } from "react-final-form";

const CheckboxInput = ({ label, name }) => {
  return (
    <Field name={name} type="checkbox">
      {({ input }) => (
        <div className="field-wrapper">
          <label>{label}</label>
          <input type="checkbox" {...input} />
        </div>
      )}
    </Field>
  );
};

export default CheckboxInput;
