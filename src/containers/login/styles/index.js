import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
`;

export const LoginUpperPanel = styled.div`
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

export const LoginFormCard = styled.div`
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
    margin-bottom: 30px;
  }

  p {
    margin-top: 50px;
    text-align: center;
  }
  a {
    color: ${({ theme }) => theme.skyBlue};
    text-decoration: none;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  & > input {
    margin-bottom: 20px;
  }

  & > button {
    margin-top: 20px;
  }

  > span {
    text-align: right;
    margin-bottom: 20px;
    color: red;
  }
`;

export const InputLabel = styled.span``;

export const LoginLowerPanel = styled.div`
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
