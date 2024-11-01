'use client'
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { ECommerce, PaymentDetails } from "@/Constant";
import { Container, Row } from "reactstrap";
import CodForm from "./CodForm";
import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import EmiForm from "./EmiForm";
import NetBanking from "./NetBanking";

const PaymentDetailsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={PaymentDetails} parent={ECommerce} />
      <Container fluid className="credit-card">
        <Row>
          <CreditCard />
          <DebitCard />
          <CodForm />
          <EmiForm />
          <NetBanking />
        </Row>
      </Container>
    </>
  );
};

export default PaymentDetailsContainer;
