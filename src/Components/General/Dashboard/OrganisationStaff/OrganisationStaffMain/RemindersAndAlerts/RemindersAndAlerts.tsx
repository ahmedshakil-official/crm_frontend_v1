import React from "react";
import { Card, CardBody, Badge, Row, Col } from "reactstrap";

const alerts = [
  {
    type: "Reminder",
    urgent: true,
    title: "Quarterly compliance review due in 3 days",
    assigned: "All Advisers",
    bg: "bg-light-danger",
  },
  {
    type: "Alert",
    urgent: true,
    title: "Document verification backlog increasing",
    assigned: "Admin Team",
    bg: "bg-light-danger",
  },
  {
    type: "Reminder",
    urgent: false,
    title: "Client follow-up required - Tech Solutions",
    assigned: "Sarah Johnson",
    bg: "bg-light-info",
  },
  {
    type: "Alert",
    urgent: false,
    title: "New regulatory guidelines published",
    assigned: "All Staff",
    bg: "bg-light-warning",
  },
];

const bgColorMap = {
  "bg-light-danger": "#fdecea",
  "bg-light-info": "#eef4ff",
  "bg-light-warning": "#fff8e1",
};

const RemindersAlerts = () => {
  return (
    <Card className="border-0 p-4 rounded-2 shadow-sm bg-white" style={{height: "600px"}}>
      <h5 className="mb-3">
        <strong>Reminders & Alerts</strong>
      </h5>
      {alerts.map((alert, index) => (
        <Card
          key={index}
          className="mb-3"
          style={{
            backgroundColor: bgColorMap[alert.bg as keyof typeof bgColorMap],
            borderRadius: "12px",
            border: "none",
          }}
        >
          <CardBody>
            <Row className="mb-2">
              <Col>
                <Badge
                  color={alert.type === "Alert" ? "warning" : "primary"}
                  className="me-2"
                >
                  {alert.type}
                </Badge>
                {alert.urgent && <Badge color="danger">Urgent</Badge>}
              </Col>
            </Row>
            <p className="mb-1">{alert.title}</p>
            <small className="text-muted">Assigned to: {alert.assigned}</small>
          </CardBody>
        </Card>
      ))}
    </Card>
  );
};

export default RemindersAlerts;
