import styled from "styled-components";

export const SignupContainer = styled.div`
  width: 100%;
`;

export const SignupUpperPanel = styled.div`
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

export const SignupFormCard = styled.div`
  background-color: white;
  width: 550px;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateY(10%);
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

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;

  & > button {
    margin-top: 30px;
  }

  > span {
    text-align: right;
    color: red;
    font-size: 14px;
    margin-top: 5px;
  }
`;

export const LabelContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  margin-top: 20px;
`;

export const InputLabel = styled.span``;

export const SignupLowerPanel = styled.div`
  padding-top: 4rem;
  width: 100%;
  min-height: 600px;
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

export const ProfileTypeCardsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const ProfileTypeCard = styled.div`
  width: 130px;
  height: 50px;
  margin-right: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, selected }) =>
    selected ? theme.skyBlue : "white"};
  color: ${({ theme, selected }) => (!selected ? theme.skyBlue : "white")};
  border: ${({ selected }) => (!selected ? "1px solid #C6C6C6" : "none")};
  cursor: pointer;
`;
