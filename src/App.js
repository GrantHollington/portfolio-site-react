import Topbar from "./components/topbar/Topbar";
import styled from "styled-components";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import { Works } from "./components/works/Works";
import Contact from "./components/contact/Contact";

const Container = styled.div`
`;

const Sections = styled.div`
`;



function App() {
  return (
    <Container>
      <Topbar />
      <Sections>
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </Sections>
    </Container>
  );
}

export default App;
