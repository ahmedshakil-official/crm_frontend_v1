import { Container } from "reactstrap";
import UnderDevelopment from "../Other/UnderDevelopment/UnderDevelopment";
import NavBar from "./Components/NavBar/NavBar";
import "./LandingPageStyle.css";

const LandingContainer: React.FC = () => {
  return (
    <>
      <main>
        <NavBar />
      </main>
      <Container fluid>
        <UnderDevelopment />
      </Container>
    </>
  );
};

export default LandingContainer;
