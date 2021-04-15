import styled from "styled-components";

export const InputFieldContainer = styled.input`
  background-color: #e8e8e833;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  padding: 10px 10px;
  border-radius: 5px;
  font-size: 14px;
  border: 2px solid ${({ isInvalid }) => (isInvalid ? "#FF0000" : "#c6c6c6")};

  &:focus {
    outline-color: ${({ theme, isInvalid }) =>
      isInvalid ? "#FF0000" : theme.skyBlue};
  }
`;
