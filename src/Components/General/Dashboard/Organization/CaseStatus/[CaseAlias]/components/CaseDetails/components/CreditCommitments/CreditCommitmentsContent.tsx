import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";

const CreditCommitmentsContent: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col lg="4" md="12">
          <Card className="ecommerce-widget rounded-4">
            <CardBody className="support-ticket-font pt-2  border-3 rounded-4 border-b-primary">
              <CardHeader className="pt-0 pb-1 m-0 text-center">
                <h4 className="fw-bold fs-6">Total Balance</h4>
              </CardHeader>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="text-primary h1">
                  <i className="fa-solid fa-sterling-sign"></i>
                </span>
                <span className="h5 text-primary font-weight-bold">£0.00</span>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="12">
          <Card className="ecommerce-widget rounded-4">
            <CardBody className="support-ticket-font pt-2  border-3 rounded-4 border-b-secondary">
              <CardHeader className="pt-0 pb-1 m-0 text-center">
                <h4 className="fw-bold fs-6">Total Balance To Be Repaid</h4>
              </CardHeader>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="text-secondary h1">
                  <i className="fa-solid fa-sterling-sign"></i>
                </span>
                <span className="h5 text-secondary font-weight-bold">
                  £0.00
                </span>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="12">
          <Card className="ecommerce-widget rounded-4">
            <CardBody className="support-ticket-font pt-2  border-3 rounded-4 border-b-info">
              <CardHeader className="pt-0 pb-1 m-0 text-center">
                <h4 className="fw-bold fs-6">Total Balance To Remain</h4>
              </CardHeader>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="text-info h1">
                  <i className="fa-solid fa-sterling-sign"></i>
                </span>
                <span className="h5 text-info font-weight-bold">£0.00</span>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* 2nd row  */}
      <Row>
        <Col lg="4" md="12">
          <Card className="ecommerce-widget rounded-4">
            <CardBody className="support-ticket-font pt-2  border-3 rounded-4 border-b-primary">
              <CardHeader className="pt-0 pb-1 m-0 text-center">
                <h4 className="fw-bold fs-6">Total Balance</h4>
              </CardHeader>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="text-primary h1">
                  <i className="fa-solid fa-calendar-days"></i>
                </span>
                <span className="h5 text-primary font-weight-bold">£0.00</span>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="12">
          <Card className="ecommerce-widget rounded-4">
            <CardBody className="support-ticket-font pt-2  border-3 rounded-4 border-b-secondary">
              <CardHeader className="pt-0 pb-1 m-0 text-center">
                <h4 className="fw-bold fs-6">Total Balance To Be Repaid</h4>
              </CardHeader>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="text-secondary h1">
                  <i className="fa-solid fa-calendar-days"></i>
                </span>
                <span className="h5 text-secondary font-weight-bold">
                  £0.00
                </span>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="12">
          <Card className="ecommerce-widget rounded-4">
            <CardBody className="support-ticket-font pt-2  border-3 rounded-4 border-b-info">
              <CardHeader className="pt-0 pb-1 m-0 text-center">
                <h4 className="fw-bold fs-6">Total Balance To Remain</h4>
              </CardHeader>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="text-info h1">
                  <i className="fa-solid fa-calendar-days"></i>
                </span>
                <span className="h5 text-info font-weight-bold">£0.00</span>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* 3r row  */}
      <Row>
        <Col lg="4" md="12">
          <Card className="ecommerce-widget rounded-4">
            <CardBody className="support-ticket-font pt-2  border-3 rounded-4 border-b-primary">
              <CardHeader className="pt-0 pb-1 m-0 text-center">
                <h4 className="fw-bold fs-6">Total Settlement  Balance</h4>
              </CardHeader>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="text-primary h1">
                  <i className="fa-solid fa-sterling-sign"></i>
                </span>
                <span className="h5 text-primary font-weight-bold">£0.00</span>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* Cards Rows end  */}
      <Row>
        <Col className="d-flex justify-content-between">
          <Button color="secondary" type="submit">
            View Summary
          </Button>
          <Button color="primary" type="submit">
            Add Credit Item
          </Button>
        </Col>
      </Row>
      {/* Table start  */}
    </Container>
  );
};

export default CreditCommitmentsContent;
