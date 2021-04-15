import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 10px 16px;
  background: ${({ theme, outlined }) =>
    outlined ? theme.outlinedBtnBackground : theme.skyBlue};
  border-radius: 5px;
  color: white;
  border: 1px solid ${({ theme }) => theme.skyBlue};
  outline: none;
  font-size: 14px;
  cursor: pointer;

  :disabled {
    cursor: auto;
  }
`;
