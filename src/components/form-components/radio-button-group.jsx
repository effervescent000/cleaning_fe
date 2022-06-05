import React from "react";

import { Field } from "react-final-form";

const RadioInputGroup = ({ groupLabel, name, values }) => {
  return (
    <div>
      {groupLabel}
      {values.map((value) => (
        <div key={value}>
          <label>
            <Field name={name} component="input" type="radio" value={value} />
            {value}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioInputGroup;
