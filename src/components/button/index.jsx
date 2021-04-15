import React from "react";
import { ButtonContainer } from "./styles";

const Button = ({ children, ...restProps }) => {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};

export default Button;
