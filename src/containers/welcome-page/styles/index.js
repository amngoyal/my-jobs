import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
`;

export const PageUpperBackground = styled.div`
  height: 400px;
  width: 100%;
  background: linear-gradient(
      248deg,
      ${({ theme }) => theme.darkPurple},
      ${({ theme }) => theme.lightPurple}
    )
    0% 0% no-repeat padding-box;

  display: flex;
  flex-direction: column;
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

export const UpperPageContent = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 1400px;
`;

export const MainHeading = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainHeadingContent = styled.div`
  h1 {
    color: white;
    font-size: 3.2rem;
    font-weight: 500;
    margin-bottom: 30px;
  }
  h2 {
    color: white;
    font-size: 3.2rem;
    font-weight: 400;
    margin-bottom: 30px;
    margin: 0;
  }

  span {
    color: ${({ theme }) => theme.skyBlue};
  }
`;

export const ImageWrapper = styled.div`
  flex: 0.5;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  & > img {
    max-height: 320px;
    object-fit: contain;
    border-radius: 20px;
    transform: translateY(50px);
  }
`;

export const PageLowerBackground = styled.div`
  padding-top: 4rem;
  width: 100%;
  min-height: 50vh;
  background: ${({ theme }) => theme.lightBlue} 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WhyUsContainer = styled.div`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  max-width: 1200px;

  h1 {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.lightPurple};
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  height: 200px;
  width: 350px;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #fff;
  margin-right: 20px;
  padding: 2rem;

  h3 {
    margin-bottom: 2rem;
    font-size: 20px;
    color: ${({ theme }) => theme.skyBlue};
  }

  p {
  }
`;

export const CompaniesContainer = styled.div`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  max-width: 1200px;

  h1 {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.lightPurple};
  }
`;

export const CompanyImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    max-height: 50px;
    margin-right: 50px;
    margin-top: 30px;
  }
`;
