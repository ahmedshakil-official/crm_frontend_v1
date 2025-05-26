import Link from "next/link";
import React from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const RecentActivity: React.FC = () => {
  return (
    <Col md={4} xs={12}>
      <Card className="shadow-sm rounded-4">
        <CardHeader className="bg-white border-bottom">
          <h4 className="mb-0 fw-bold">Recent Activity</h4>
        </CardHeader>
        <CardBody className="p-0">
          <div className="p-3 border-bottom">
            <div className="d-flex gap-3">
              <div
                className="rounded-circle bg-success bg-opacity-10 p-2 d-flex align-items-center justify-content-center"
                style={{ width: "32px", height: "32px" }}
              >
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <div className="flex-grow-1">
                <h6 className="mb-1">Mortgage Completion</h6>
                <p className="mb-1 text-muted small">
                  Smith Family - £320,000 residential mortgage
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 text-muted small">
                    ABC Mortgage Solutions
                  </p>
                  <span className="text-muted small">30 minutes ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 border-bottom">
            <div className="d-flex gap-3">
              <div
                className="rounded-circle bg-primary bg-opacity-10 p-2 d-flex align-items-center justify-content-center"
                style={{ width: "32px", height: "32px" }}
              >
                <i className="fa-regular fa-file-lines"></i>
              </div>
              <div className="flex-grow-1">
                <h6 className="mb-1">New Application Submitted</h6>
                <p className="mb-1 text-muted small">
                  Johnson Property - £450,000 buy-to-let mortgage
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 text-muted small">
                    Premier Finance Advisors
                  </p>
                  <span className="text-muted small">2 hours ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 border-bottom">
            <div className="d-flex gap-3">
              <div
                className="rounded-circle bg-warning bg-opacity-10 p-2 d-flex align-items-center justify-content-center"
                style={{ width: "32px", height: "32px" }}
              >
                <i className="fa-regular fa-clock"></i>
              </div>
              <div className="flex-grow-1">
                <h6 className="mb-1">Application Pending</h6>
                <p className="mb-1 text-muted small">
                  Williams Family - £275,000 first-time buyer mortgage
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 text-muted small">Home Secure Financial</p>
                  <span className="text-muted small">5 hours ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 text-center">
            <Link href="#" className="text_decoration_hover">
              View all activity
            </Link>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RecentActivity;
