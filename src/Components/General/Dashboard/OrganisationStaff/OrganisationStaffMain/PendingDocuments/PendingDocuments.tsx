import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import { TbDownload } from "react-icons/tb";

const verifications = [
  {
    company: "Tech Solutions Ltd",
    document: "Investment Proposal",
    by: "Sarah Johnson",
    time: "2 hours ago",
    priority: "High",
  },
  {
    company: "Global Corp",
    document: "Risk Assessment",
    by: "Michael Chen",
    time: "4 hours ago",
    priority: "Medium",
  },
  {
    company: "Innovation Ltd",
    document: "Compliance Report",
    by: "Emma Williams",
    time: "1 day ago",
    priority: "High",
  },
  {
    company: "Future Finance",
    document: "Client Onboarding",
    by: "James Wilson",
    time: "6 hours ago",
    priority: "Low",
  },
];

const priorityColor = {
  High: "danger",
  Medium: "warning",
  Low: "success",
};

const PendingVerifications = () => {
  return (
    <Card
      className="border-0 p-4 rounded-2 shadow-sm bg-white"
      style={{ height: "600px" }}
    >
      <h5 className="mb-3">
        <strong>Pending Document Verifications</strong>
      </h5>
      {verifications.map((item, index) => (
        <Card
          key={index}
          className="mb-3 px-3"
          style={{
            backgroundColor: "#f8faff",
            borderRadius: "12px",
            border: "none",
          }}
        >
          <CardBody className="d-flex justify-content-between align-items-center p-3">
            <div className="d-flex align-items-start gap-3">
              <TbDownload size={24} className="text-primary mt-1" />
              <div>
                <h6 className="mb-1 fw-bold">{item.company}</h6>
                <p className="mb-0 text-muted" style={{ fontSize: "0.9rem" }}>
                  {item.document}
                </p>
                <small className="text-muted">
                  by {item.by} • {item.time}
                </small>
              </div>
            </div>
            <Badge
              color={priorityColor[item.priority as keyof typeof priorityColor]}
              pill
            >
              {item.priority}
            </Badge>
          </CardBody>
        </Card>
      ))}
    </Card>
  );
};

export default PendingVerifications;
