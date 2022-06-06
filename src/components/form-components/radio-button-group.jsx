import React from "react";

import { Field } from "react-final-form";

const RadioInputGroup = ({ groupLabel, name, values }) => {
  return (
    <div className="field-wrapper">
      {groupLabel}
      <div className="radio-button-group">
        {values.map((value) => (
          <div className="radio-buttons" key={value}>
            <label>
              <Field name={name} component="input" type="radio" value={value} />
              {value}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioInputGroup;
