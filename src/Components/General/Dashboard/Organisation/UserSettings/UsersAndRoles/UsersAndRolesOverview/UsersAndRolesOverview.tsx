import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";

const UsersAndRolesOverview: React.FC = () => {
  return (
    <Row>
      {/* Principal */}
      <Col md="3" sm="6">
        <Card className="text-center rounded-3 shadow-sm bg-light-primary">
          <CardBody className="d-flex justify-content-between align-items-center">
            <div>
              <CardTitle tag="h6">Principal</CardTitle>
              <CardText tag="h2" className="text-start">
                2
              </CardText>
            </div>
            <div>
              <i className="fa-solid fa-crown p-2 bg-primary rounded-3"></i>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Adviser */}
      <Col md="3" sm="6">
        <Card className="text-center rounded-3 shadow-sm bg-light-secondary">
          <CardBody className="d-flex justify-content-between align-items-center">
            <div>
              <CardTitle tag="h6">Adviser</CardTitle>
              <CardText tag="h2" className="text-start">
                8
              </CardText>
            </div>
            <div>
              <i className="fa-solid fa-user-group p-2 bg-secondary rounded-3"></i>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Admin */}
      <Col md="3" sm="6">
        <Card className="text-center rounded-3 shadow-sm bg-light-success">
          <CardBody className="d-flex justify-content-between align-items-center">
            <div>
              <CardTitle tag="h6">Admin</CardTitle>
              <CardText tag="h2" className="text-start">
                3
              </CardText>
            </div>
            <div>
              <i className="fa-solid fa-shield p-2 bg-success rounded-3"></i>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Support */}
      <Col md="3" sm="6">
        <Card className="text-center rounded-3 shadow-sm bg-light-warning">
          <CardBody className="d-flex justify-content-between align-items-center">
            <div>
              <CardTitle tag="h6">Support</CardTitle>
              <CardText tag="h2" className="text-start">
                2
              </CardText>
            </div>
            <div>
              <i className="fa-solid fa-gear p-2 bg-warning rounded-3"></i>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default UsersAndRolesOverview;
