import React from "react";
import { Field } from "react-final-form";

const SelectField = ({ label, name, options }) => {
  return (
    <Field name={name}>
      {({ input }) => (
        <div className="field-wrapper">
          <label>{label}</label>
          <select {...input}>
            <option />
            {options.map(({ name, value }) => (
              <option key={value} value={value}>
                {name}
              </option>
            ))}
          </select>
        </div>
      )}
    </Field>
  );
};

export default SelectField;
