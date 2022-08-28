import { Fragment } from "react";
import ExamCard from "../exam-card/ExamCard";
import Navbar from "../navbar/Navbar";
import * as Styled from "./App.styles";

export default function App() {
  return (
    <Fragment>
      <Navbar />
      <Styled.StyledContainer maxWidth="sm">
        <ExamCard />
      </Styled.StyledContainer>
    </Fragment>
  );
}
