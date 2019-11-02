import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer
      data-test="FormInputContainer"
      onChange={handleChange}
      {...props}
    />
    {label ? (
      <FormInputLabel
        data-test="FormInputLabel"
        className={props.value.length ? "shrink" : ""}
      >
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
