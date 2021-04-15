import React from "react";
import { withRouter } from "react-router";
import { Button } from "../../components";
import { Link } from "react-router-dom";

import {
  PageContainer,
  PageUpperBackground,
  PageLowerBackground,
  UpperPageContent,
  MainHeading,
  ImageWrapper,
  Navbar,
  NavbarContent,
  MainHeadingContent,
  WhyUsContainer,
  CompaniesContainer,
  CardsContainer,
  Card,
  CompanyImageContainer,
} from "./styles";

const WelcomePage = (props) => {
  return (
    <PageContainer>
      <PageUpperBackground>
        <Navbar>
          <NavbarContent>
            <Link to="/">
              <h1>
                My<span>Jobs</span>
              </h1>
            </Link>
            <Button onClick={() => props.history.push("/login")} outlined>
              Login/Signup
            </Button>
          </NavbarContent>
        </Navbar>
        <UpperPageContent>
          <MainHeading>
            <MainHeadingContent>
              <h2>Welcome to </h2>
              <h1>
                My<span>Jobs</span>
              </h1>

              <Button onClick={() => props.history.push("/signup")}>
                Get Started
              </Button>
            </MainHeadingContent>
          </MainHeading>
          <ImageWrapper>
            <img
              src="https://previews.123rf.com/images/deklofenak/deklofenak1107/deklofenak110700029/9997054-young-beautiful-girl-with-a-laptop-at-home.jpg"
              alt="welcome"
            />
          </ImageWrapper>
        </UpperPageContent>
      </PageUpperBackground>
      <PageLowerBackground>
        <WhyUsContainer>
          <h1>Why Us</h1>
          <CardsContainer>
            <Card>
              <h3>
                Get more <br /> Visibility
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </Card>
            <Card>
              <h3>
                Organize your <br /> candidates
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </Card>
            <Card>
              <h3>
                Verify their <br /> abilities
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </Card>
          </CardsContainer>
        </WhyUsContainer>
        <CompaniesContainer>
          <h1>companies who trust us</h1>
          <CompanyImageContainer>
            <img
              src="https://leafletgroup.com/wp-content/uploads/24.png"
              alt="solaytic"
            ></img>
            <img
              src="https://leafletgroup.com/wp-content/uploads/24.png"
              alt="solaytic"
            ></img>
            <img
              src="https://leafletgroup.com/wp-content/uploads/24.png"
              alt="solaytic"
            ></img>
            <img
              src="https://leafletgroup.com/wp-content/uploads/24.png"
              alt="solaytic"
            ></img>
            <img
              src="https://leafletgroup.com/wp-content/uploads/24.png"
              alt="solaytic"
            ></img>
            <img
              src="https://leafletgroup.com/wp-content/uploads/24.png"
              alt="solaytic"
            ></img>
            <img
              src="https://leafletgroup.com/wp-content/uploads/24.png"
              alt="solaytic"
            ></img>
            <img
              src="https://leafletgroup.com/wp-content/uploads/24.png"
              alt="solaytic"
            ></img>
            <img
              src="https://leafletgroup.com/wp-content/uploads/24.png"
              alt="solaytic"
            ></img>
          </CompanyImageContainer>
        </CompaniesContainer>
      </PageLowerBackground>
    </PageContainer>
  );
};

export default withRouter(WelcomePage);
