import { Container } from "reactstrap";
import UnderDevelopment from "../Other/UnderDevelopment/UnderDevelopment";
import LandingFooter from "./Components/Footer/LandingFooter";
import NavBar from "./Components/NavBar/NavBar";
import "./LandingPageStyle.css";

const LandingContainer: React.FC = () => {
  return (
    <>
      <NavBar />
      <main>
        <Container fluid>
          <UnderDevelopment />
        </Container>
      </main>
      <LandingFooter />
    </>
  );
};

export default LandingContainer;
