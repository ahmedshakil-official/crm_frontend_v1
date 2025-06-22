import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";

const WorkflowsAndIntegrationsOverview: React.FC = () => {
  return (
    <Row>
      {/* Principal */}
      <Col md="3" sm="6">
        <Card className="text-center rounded-3 shadow-sm bg-light-primary">
          <CardBody className="d-flex justify-content-between align-items-center">
            <div>
              <CardTitle tag="h6">Active Workflows</CardTitle>
              <CardText tag="h2" className="text-start">
                12
              </CardText>
            </div>
            <div>
              <i className="fa-solid fa-play p-2 bg-primary rounded-3"></i>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Integrations */}
      <Col md="3" sm="6">
        <Card className="text-center rounded-3 shadow-sm bg-light-secondary">
          <CardBody className="d-flex justify-content-between align-items-center">
            <div>
              <CardTitle tag="h6">Integrations</CardTitle>
              <CardText tag="h2" className="text-start">
                8
              </CardText>
            </div>
            <div>
              <i className="fa-solid fa-bolt p-2 bg-secondary rounded-3"></i>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Automated Task */}
      <Col md="3" sm="6">
        <Card className="text-center rounded-3 shadow-sm bg-light-success">
          <CardBody className="d-flex justify-content-between align-items-center">
            <div>
              <CardTitle tag="h6">Automated Task</CardTitle>
              <CardText tag="h2" className="text-start">
                345
              </CardText>
            </div>
            <div>
              <i className="fa-solid fa-code-merge p-2 bg-success rounded-3"></i>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Success Rate */}
      <Col md="3" sm="6">
        <Card className="text-center rounded-3 shadow-sm bg-light-warning">
          <CardBody className="d-flex justify-content-between align-items-center">
            <div>
              <CardTitle tag="h6">Success Rate</CardTitle>
              <CardText tag="h2" className="text-start">
                92%
              </CardText>
            </div>
            <div>
              <i className="fa-solid fa-circle-check p-2 bg-warning rounded-3"></i>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default WorkflowsAndIntegrationsOverview;
