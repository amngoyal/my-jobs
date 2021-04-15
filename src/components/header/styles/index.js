import styled from "styled-components";

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
