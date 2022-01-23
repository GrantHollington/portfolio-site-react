import Topbar from "./components/topbar/Topbar";
import styled from "styled-components";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import { Works } from "./components/works/Works";
import Contact from "./components/contact/Contact";

const Container = styled.div`
  height: 100vh;
`;

const Sections = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  background-color: salmon;
  position: relative;
  top: 70px;
  scroll-snap-type: y mandatory;
  scrollbar-width: none; // for firefox
  &::-webkit-scrollbar{
      display: none;
  }

  > * {
    width: 100vw;
    height: calc(100vh - 70px);
    scroll-snap-align: start; 
  }
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
