import { useState } from "react";
import { Button, Card, Col, Input, Label, Row } from "reactstrap";

const WorkflowsTab: React.FC = () => {
  const [filterIcon, setFilterIcon] = useState(false);
  const toggleFilterIcon = () => {
    setFilterIcon(!filterIcon);
  };
  return (
    <Row>
      <Col>
        <Card className="px-2 pt-4 pb-2 rounded-3">
          <div className="d-flex justify-content-between align-items-center mb-3 gap-2">
            <Input
              className="w-100"
              placeholder="Search Workflows..."
              type="text"
              style={{ padding: "10px 10px" }}
            />
            <Button onClick={toggleFilterIcon} color="success" className="me-2">
              {filterIcon ? (
                <i className="fa-solid fa-filter-circle-xmark"></i>
              ) : (
                <i className="fa-solid fa-filter"></i>
              )}
            </Button>
          </div>
          <div>
            {filterIcon && (
              <Card className="shadow-lg p-3 mb-3 rounded-3 bg-light-success">
                <Row className="justify-content-center g-3">
                  <Col xs="12" sm="6" md="4">
                    <Label>Status</Label>
                    <Input type="select" id="1" className="py-1">
                      <option value="">All Status</option>
                      <option value="ACTIVE">Active</option>
                      <option value="INACTIVE">Inactive</option>
                      <option value="DRAFT">Draft</option>
                      <option value="ERROR">Error</option>
                    </Input>
                  </Col>
                  <Col xs="12" sm="6" md="4">
                    <Label>Category</Label>
                    <Input type="select" id="2" className="py-1">
                      <option value="">All Category</option>
                      <option value="CLIENT_ONBOARDING">
                        Client Onboarding
                      </option>
                      <option value="DOCUMENT_PROCESSING">
                        Document Processing
                      </option>
                      <option value="COMPLIANCE">Compliance</option>
                      <option value="COMMUNICATION">Communication</option>
                      <option value="REPORTING">Reporting</option>
                      <option value="DATA_SYNC">Data Sync</option>
                      <option value="NOTIFICATIONS">Notifications</option>
                    </Input>
                  </Col>
                  {/* Clear All Filters Button */}
                  <Col xs="12" sm="6" md="4">
                    <div>
                      <Label>Clear All Filters</Label>
                      <Button
                        outline
                        className="btn btn-outline-danger w-100 d-flex justify-content-center align-items-center gap-1"
                      >
                        <span>Clear</span>
                        <i className="fa-solid fa-xmark"></i>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card>
            )}
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default WorkflowsTab;
