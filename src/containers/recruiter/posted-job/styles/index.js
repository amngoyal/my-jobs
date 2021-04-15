import { Dialog } from "@material-ui/core";
import styled from "styled-components";
import { Button } from "../../../../components";

export const PostedJobContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.lightPurple} 35%,
    ${({ theme }) => theme.lightBlue} 35%
  );
`;

export const PostedJobContent = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 1rem;
  color: white;

  & > h1 {
    margin: 2rem 0 1.5rem;
    font-size: 30px;
    font-weight: 500;
  }
`;

export const PageRoute = styled.div`
  display: flex;
  p {
    margin-left: 5px;
  }
`;

export const JobCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const JobCard = styled.div`
  height: 200px;
  width: 350px;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 20px;
  margin-right: 20px;
  background-color: white;
  color: #303f60;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const JobCardActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const JobLocation = styled.div`
  display: flex;
  p {
    margin-left: 5px;
  }
`;

export const ViewButton = styled(Button)`
  background-color: #43afff33;
  color: #303f60;
  border-color: #43afff33;
`;

export const CustomDialog = styled(Dialog)`
  & .MuiPaper-root {
    border-radius: 20px !important;
    max-height: 600px;
  }

  & .MuiDialogContent-root {
    padding: 0px 16px 16px;
  }
`;

export const DialogTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #557da526;
  h3 {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const ApplicantsCardWrapper = styled.div`
  background-color: #a9afbc;
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px 0px 0px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const ApplicantCard = styled.div`
  /* width: 280px; */
  width: 48%;
  min-width: 48%;
  height: 150px;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  border: 10x solid #303f6080;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ApplicantDetailsContainer = styled.div`
  display: flex;
`;

export const ApplicantName = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

export const ApplicantSkillsContainer = styled.div``;

export const NoFileContainer = styled.div`
  min-height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #303f60;

  svg {
    margin-bottom: 1rem;
    font-size: 4rem;
  }

  svg > path {
    stroke: #303f60;
  }
`;

export const NoPostJobContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #303f60;

  svg {
    margin-bottom: 1rem;
    font-size: 4rem;
  }

  svg > path {
    stroke: #303f60;
  }

  p {
    margin-bottom: 1.5rem;
  }
`;

export const PaginationContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  ul button {
    background-color: #43afff33;
    opacity: 1;
    color: #303f60;
  }

  li {
  }
`;
