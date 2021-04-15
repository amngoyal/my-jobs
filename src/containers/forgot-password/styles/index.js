import styled from "styled-components";

export const ForgotPasswordContainer = styled.div`
  width: 100%;
`;

export const ForgotPasswordUpperPanel = styled.div`
  height: 50vh;
  width: 100%;
  background: linear-gradient(
      248deg,
      ${({ theme }) => theme.darkPurple},
      ${({ theme }) => theme.lightPurple}
    )
    0% 0% no-repeat padding-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ForgotPasswordFormCard = styled.div`
  background-color: white;
  width: 550px;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateY(30%);
  color: ${({ theme }) => theme.lightPurple};

  h1 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }
  a {
    color: ${({ theme }) => theme.skyBlue};
    text-decoration: none;
  }
`;

export const ForgotPasswordForm = styled.form`
  display: flex;
  flex-direction: column;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  & > span {
    font-size: 14px;
    color: red;
    text-align: right;
    margin-top: 5px;
  }

  & > button {
    margin-top: 40px;
  }
`;

export const InputLabel = styled.span``;

export const ForgotPasswordLowerPanel = styled.div`
  padding-top: 4rem;
  width: 100%;
  min-height: 50vh;
  background: ${({ theme }) => theme.lightBlue} 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavbarContent = styled.div`
  height: 70px;
  width: 100%;
  margin: 0 3rem;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  a {
    text-decoration: none;
  }
  h1 {
    cursor: pointer;
    text-decoration: none;
    color: white;
    font-style: none;
  }
  span {
    color: ${({ theme }) => theme.skyBlue};
  }
`;
