import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";

const ReportsAndLogsOverview: React.FC = () => {
  return (
    <Row>
      {/* Total Reports */}
      <Col md="3" sm="6">
        <Card className="text-center rounded-3 shadow-sm bg-light-primary">
          <CardBody className="d-flex justify-content-between align-items-center">
            <div>
              <CardTitle tag="h6" className="text-start">
                Total Reports
              </CardTitle>
              <div className="d-flex gap-4 justify-content-start align-items-center">
                <CardText tag="h2" className="text-start">
                  2
                </CardText>
                <div className="bg-light-success px-3 rounded-3 fs-7">+2%</div>
              </div>
            </div>
            <div>
              <i className="fa-solid fa-file-lines p-2 bg-primary rounded-3"></i>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Generated Today */}
      <Col md="3" sm="6">
        <Card className="text-center rounded-3 shadow-sm bg-light-secondary">
          <CardBody className="d-flex justify-content-between align-items-center">
            <div>
              <CardTitle tag="h6" className="text-start">
                Generated Today
              </CardTitle>
              <div className="d-flex gap-4 justify-content-start align-items-center">
                <CardText tag="h2" className="text-start">
                  23
                </CardText>
                <div className="bg-light-secondary px-3 rounded-3 fs-7">
                  +5%
                </div>
              </div>
            </div>
            <div>
              <i className="fa-solid fa-arrow-trend-up p-2 bg-secondary rounded-3"></i>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Audit Events */}
      <Col md="3" sm="6">
        <Card className="text-center rounded-3 shadow-sm bg-light-success">
          <CardBody className="d-flex justify-content-between align-items-center">
            <div>
              <CardTitle tag="h6" className="text-start">
                Audit Events
              </CardTitle>
              <div className="d-flex gap-4 justify-content-start align-items-center">
                <CardText tag="h2" className="text-start">
                  15672
                </CardText>
                <div className="bg-light-secondary px-3 rounded-3 fs-7">
                  +8%
                </div>
              </div>
            </div>
            <div>
              <i className="fa-solid fa-wave-square p-2 bg-success rounded-3"></i>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Active Users */}
      <Col md="3" sm="6">
        <Card className="text-center rounded-3 shadow-sm bg-light-warning">
          <CardBody className="d-flex justify-content-between align-items-center">
            <div>
              <CardTitle tag="h6" className="text-start">
                Active Users
              </CardTitle>
              <div className="d-flex gap-4 justify-content-start align-items-center">
                <CardText tag="h2" className="text-start">
                  47
                </CardText>
                <div className="bg-light-secondary px-3 rounded-3 fs-7">
                  +3%
                </div>
              </div>
            </div>
            <div>
              <i className="fa-solid fa-users p-2 bg-warning rounded-3"></i>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ReportsAndLogsOverview;
