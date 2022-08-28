import { Fragment } from "react";
import Navbar from "../navbar/Navbar";
import * as Styled from "./App.styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SendNote from "../send-note/SendNote";
import Home from "../pages/Home";
import { useSelector } from "react-redux";
import Notification from "../notification/Notification";

export default function App() {
  const message = useSelector((state) => state.api.message);

  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        {message && <Notification message={message} />}
        <Routes>
          <Route
            path="/"
            element={
              <Styled.StyledContainer maxWidth="sm">
                <Home />
              </Styled.StyledContainer>
            }
          />
          <Route
            path="/not-gonder"
            element={
              <Styled.StyledContainer maxWidth="sm">
                <SendNote />
              </Styled.StyledContainer>
            }
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
