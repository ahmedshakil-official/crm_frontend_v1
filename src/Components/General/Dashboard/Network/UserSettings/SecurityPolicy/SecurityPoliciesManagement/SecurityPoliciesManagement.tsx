import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
} from "reactstrap";

const SecurityPoliciesManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState("security-policies");

  const policies = [
    {
      name: "Password Policy",
      description: "Defines password complexity and rotation requirements",
      appliedTo: "All Users",
      status: "Active",
      lastUpdated: "2024-01-10",
      priority: "high",
    },
    {
      name: "Session Management",
      description: "Controls user session timeouts and concurrent sessions",
      appliedTo: "All Users",
      status: "Active",
      lastUpdated: "2024-01-08",
      priority: "medium",
    },
    {
      name: "Data Retention Policy",
      description: "Specifies data retention periods for different data types",
      appliedTo: "All AR Firms",
      status: "Active",
      lastUpdated: "2024-01-05",
      priority: "high",
    },
    {
      name: "API Access Control",
      description: "Manages third-party API access permissions",
      appliedTo: "System Integrations",
      status: "Under Review",
      lastUpdated: "2024-01-15",
      priority: "medium",
    },
  ];

  return (
    <>
      <Card className="shadow-sm">
        <CardHeader>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <FaLock className="text-primary fs-4" />
              <h3 className="mb-0">Security Policies Management</h3>
            </div>
            <Button color="primary">+ Create Policy</Button>
          </div>
        </CardHeader>
        <CardBody>
          <Nav
            tabs
            className="mb-3 d-flex justify-content-center border-0 gap-2"
          >
            <NavItem>
              <NavLink
                className={`rounded-3 px-4 py-2 ${
                  activeTab === "security-policies"
                    ? "active bg-primary text-white"
                    : "text-dark"
                }`}
                onClick={() => setActiveTab("security-policies")}
                style={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  border: "none",
                }}
              >
                Security Policies
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`rounded-3 px-4 py-2 ${
                  activeTab === "system-settings"
                    ? "active bg-primary text-white"
                    : "text-dark"
                }`}
                onClick={() => setActiveTab("system-settings")}
                style={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  border: "none",
                }}
              >
                System Settings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`rounded-3 px-4 py-2 ${
                  activeTab === "data-retention"
                    ? "active bg-primary text-white"
                    : "text-dark"
                }`}
                onClick={() => setActiveTab("data-retention")}
                style={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  border: "none",
                }}
              >
                Data Retention
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`rounded-3 px-4 py-2 ${
                  activeTab === "alerts-notifications"
                    ? "active bg-primary text-white"
                    : "text-dark"
                }`}
                onClick={() => setActiveTab("alerts-notifications")}
                style={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  border: "none",
                }}
              >
                Alerts & Notifications
              </NavLink>
            </NavItem>
          </Nav>

          {/* Security Policies Tab */}
          {activeTab === "security-policies" && (
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="bg-light">
                  <tr>
                    <th>Policy</th>
                    <th>Description</th>
                    <th>Applied To</th>
                    <th>Status</th>
                    <th>Last Updated</th>
                    <th>Priority</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {policies.map((policy, index) => (
                    <tr key={index}>
                      <td className="fw-medium">{policy.name}</td>
                      <td>{policy.description}</td>
                      <td>{policy.appliedTo}</td>
                      <td>
                        <span
                          className={`badge bg-${
                            policy.status === "Active" ? "success" : "warning"
                          } bg-opacity-10 text-${
                            policy.status === "Active" ? "success" : "warning"
                          }`}
                        >
                          {policy.status}
                        </span>
                      </td>
                      <td>{policy.lastUpdated}</td>
                      <td>
                        <span
                          className={`badge bg-${
                            policy.priority === "high" ? "danger" : "warning"
                          } bg-opacity-10 text-${
                            policy.priority === "high" ? "danger" : "warning"
                          }`}
                        >
                          {policy.priority}
                        </span>
                      </td>
                      <td>
                        <Button color="link" className="p-0">
                          <i className="fas fa-edit"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* System Settings Tab */}
          {activeTab === "system-settings" && (
            <div>
              <h5 className="mb-4">Password Requirements</h5>
              <Form>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Minimum Password Length</Label>
                      <Input
                        type="range"
                        min="8"
                        max="24"
                        value="12"
                        className="w-100"
                      />
                      <small className="text-muted">12 characters</small>
                    </FormGroup>
                    <FormGroup className="mt-3">
                      <div className="form-check form-switch">
                        <Input type="switch" id="uppercase" />
                        <Label check for="uppercase">
                          Require uppercase letters
                        </Label>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <div className="form-check form-switch">
                        <Input type="switch" id="numbers" />
                        <Label check for="numbers">
                          Require numbers
                        </Label>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <div className="form-check form-switch">
                        <Input type="switch" id="lowercase" />
                        <Label check for="lowercase">
                          Require lowercase letters
                        </Label>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <div className="form-check form-switch">
                        <Input type="switch" id="special" />
                        <Label check for="special">
                          Require special characters
                        </Label>
                      </div>
                    </FormGroup>
                  </Col>
                </Row>

                <h5 className="mt-4 mb-4">Authentication Settings</h5>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Session Timeout</Label>
                      <Input
                        type="range"
                        min="5"
                        max="60"
                        value="30"
                        className="w-100"
                      />
                      <small className="text-muted">30 minutes</small>
                    </FormGroup>
                    <FormGroup className="mt-3">
                      <div className="form-check form-switch">
                        <Input type="switch" id="twoFactor" />
                        <Label check for="twoFactor">
                          Enable Two-Factor Authentication
                        </Label>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <div className="form-check form-switch">
                        <Input type="switch" id="ipWhitelist" />
                        <Label check for="ipWhitelist">
                          Enable IP Whitelisting
                        </Label>
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </div>
          )}

          {/* Data Retention Tab */}
          {activeTab === "data-retention" && (
            <div>
              <h5 className="mb-4">Data Retention Policies</h5>
              <div className="data-retention-list">
                <div className="retention-item border rounded p-3 mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="mb-1">Client Personal Data</h6>
                      <p className="text-muted mb-0">
                        Data will be automatically purged after retention period
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Input
                        type="select"
                        className="form-select"
                        style={{ width: "100px" }}
                      >
                        <option>7</option>
                        <option>6</option>
                        <option>5</option>
                      </Input>
                      <span>Years</span>
                      <Button color="link" className="p-0">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="retention-item border rounded p-3 mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="mb-1">Case Documents</h6>
                      <p className="text-muted mb-0">
                        Data will be automatically purged after retention period
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Input
                        type="select"
                        className="form-select"
                        style={{ width: "100px" }}
                      >
                        <option>6</option>
                        <option>5</option>
                        <option>4</option>
                      </Input>
                      <span>Years</span>
                      <Button color="link" className="p-0">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="retention-item border rounded p-3 mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="mb-1">Audit Logs</h6>
                      <p className="text-muted mb-0">
                        Data will be automatically purged after retention period
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Input
                        type="select"
                        className="form-select"
                        style={{ width: "100px" }}
                      >
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                      </Input>
                      <span>Years</span>
                      <Button color="link" className="p-0">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Alerts & Notifications Tab */}
          {activeTab === "alerts-notifications" && (
            <div>
              <h5 className="mb-4">Security Alerts & Notifications</h5>
              <Row>
                <Col md={6}>
                  <Card className="mb-4">
                    <CardBody>
                      <h6>Failed Login Attempts</h6>
                      <FormGroup className="mt-3">
                        <div className="form-check form-switch">
                          <Input type="switch" id="failedLogin" />
                          <Label check for="failedLogin">
                            Alert on multiple failed attempts
                          </Label>
                        </div>
                      </FormGroup>
                      <small className="text-muted d-block mt-2">
                        Threshold: 5 attempts in 15 minutes
                      </small>
                    </CardBody>
                  </Card>

                  <Card className="mb-4">
                    <CardBody>
                      <h6>Data Export Activities</h6>
                      <FormGroup className="mt-3">
                        <div className="form-check form-switch">
                          <Input type="switch" id="dataExport" />
                          <Label check for="dataExport">
                            Alert on bulk data exports
                          </Label>
                        </div>
                      </FormGroup>
                      <small className="text-muted d-block mt-2">
                        Notify executives on large exports
                      </small>
                    </CardBody>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card className="mb-4">
                    <CardBody>
                      <h6>Unusual Access Patterns</h6>
                      <FormGroup className="mt-3">
                        <div className="form-check form-switch">
                          <Input type="switch" id="unusualAccess" />
                          <Label check for="unusualAccess">
                            Alert on suspicious activity
                          </Label>
                        </div>
                      </FormGroup>
                      <small className="text-muted d-block mt-2">
                        Monitor for unusual login locations
                      </small>
                    </CardBody>
                  </Card>

                  <Card className="mb-4">
                    <CardBody>
                      <h6>System Changes</h6>
                      <FormGroup className="mt-3">
                        <div className="form-check form-switch">
                          <Input type="switch" id="systemChanges" />
                          <Label check for="systemChanges">
                            Alert on configuration changes
                          </Label>
                        </div>
                      </FormGroup>
                      <small className="text-muted d-block mt-2">
                        Immediate notification to admins
                      </small>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          )}
        </CardBody>
      </Card>
    </>
  );
};

export default SecurityPoliciesManagement;
