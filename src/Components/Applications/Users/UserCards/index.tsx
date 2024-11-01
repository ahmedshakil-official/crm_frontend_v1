'use client'
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Users, UserCards } from "@/Constant";
import AllCards from "../../SocialApp/UserContext/AllCards";

const UserCardsContainer = () => {
  return (
    <>
    <Breadcrumbs mainTitle={UserCards} parent={Users} />
    <Container fluid>
      <Row className="user-cards-items">
        <AllCards />
      </Row>
    </Container>
    </>
    
  );
};

export default UserCardsContainer;
