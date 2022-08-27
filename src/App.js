import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

const Container = styled.div`
  background-color: #d0e0ef;
`;

function App() {
  return (
    <Container>
      <Global
        styles={css`
          @font-face {
            font-family: "DM Sans";
            src: url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"),
              format("woff2");
          }
        `}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
