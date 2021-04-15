import React from "react";
import { InputFieldContainer } from "./styles";

const InputField = ({ placeholder, type, onChange, ...restProps }) => {
  return (
    <InputFieldContainer
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      {...restProps}
    ></InputFieldContainer>
  );
};

export default InputField;
