import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import Link from "next/link";

interface ClientData {
  name: string;
  company: string;
  value: string;
  cases: number;
  lastContact: string;
  nextMeeting: string;
  priority: "High" | "Medium" | "Low";
  status: "Active" | "Pending" | "Inactive";
}

const MyClients: React.FC = () => {
  const clients: ClientData[] = [
    {
      name: "Sarah Williams",
      company: "Tech Solutions Ltd",
      value: "£450K",
      cases: 3,
      lastContact: "2 days ago",
      nextMeeting: "Tomorrow 10:00 AM",
      priority: "High",
      status: "Active",
    },
    {
      name: "Michael Chen",
      company: "Global Investments",
      value: "£280K",
      cases: 1,
      lastContact: "1 week ago",
      nextMeeting: "Friday 2:00 PM",
      priority: "Medium",
      status: "Pending",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "danger";
      case "Medium":
        return "warning";
      case "Low":
        return "info";
      default:
        return "secondary";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "success";
      case "Pending":
        return "warning";
      case "Inactive":
        return "secondary";
      default:
        return "secondary";
    }
  };

  return (
    <Card className="border-0 shadow-sm h-100">
      <CardBody className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="text-xl font-semibold m-0">My Clients</h4>
          <Link
            href="#"
            className="btn btn-primary btn-sm rounded-3 px-3"
          >
            View All
          </Link>
        </div>

        <div className="client-list space-y-3">
          {clients.map((client, index) => (
            <Card
              key={index}
              className="border rounded-3 mb-3 hover:shadow-md transition-shadow"
            >
              <CardBody className="p-3">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <div className="d-flex align-items-center gap-2">
                      <h5 className="mb-1">{client.company}</h5>
                      {/* <div> */}
                        <Badge color={getPriorityColor(client.priority)}>
                          {client.priority}
                        </Badge>
                      {/* </div> */}
                    </div>
                    <p className="text-muted mb-0">{client.name}</p>
                  </div>
                  <Badge color={getStatusColor(client.status)} >
                    {client.status}
                  </Badge>
                </div>

                <div className="d-flex gap-4 mb-3 ">
                  <div>
                    <small className="text-muted">Value:</small>
                    <p className="mb-0">{client.value}</p>
                  </div>
                  <div>
                    <small className="text-muted">Cases:</small>
                    <p className="mb-0">{client.cases}</p>
                  </div>
                  <div>
                    <small className="text-muted">Last contact:</small>
                    <p className="mb-0">{client.lastContact}</p>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa-regular fa-calendar text-primary"></i>
                    <span>Next: {client.nextMeeting}</span>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn text-primary btn-sm rounded-circle">
                      <i className="fa-solid fa-phone"></i>
                    </button>
                    <button className="btn text-success btn-sm rounded-circle">
                      <i className="fa-solid fa-envelope"></i>
                    </button>
                    <button className="btn text-info btn-sm rounded-circle">
                      <i className="fa-solid fa-eye"></i>
                    </button>
                    <button className="btn text-warning btn-sm rounded-circle">
                      <i className="fa-solid fa-pen"></i>
                    </button>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default MyClients;