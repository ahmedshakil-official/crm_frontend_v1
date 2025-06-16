import { Container } from "reactstrap";
import UnderDevelopment from "../Other/UnderDevelopment/UnderDevelopment";
import NavBar from "./Components/NavBar/NavBar";
import "./HomePageStyle.css"

const HomeContainer: React.FC = () => {
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

export default HomeContainer;