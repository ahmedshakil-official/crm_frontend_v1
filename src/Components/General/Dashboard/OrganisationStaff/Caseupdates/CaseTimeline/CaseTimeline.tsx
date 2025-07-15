import React from "react";
import { Card, Badge, Button } from "reactstrap";
import { TbBuilding, TbClock, TbPlus } from "react-icons/tb";

const CaseTimeline = () => {
  return (
    <Card className="border-0 shadow-sm p-3">
      <div className=" d-flex justify-content-between align-items-center mb-2">
        <p className="fs-5 fw-semibold">Case Timeline</p>
        <div>
          <Badge color="info" className="py-2 px-3 rounded-pill">
            <small>2 Updates</small>
          </Badge>
          <Badge color="danger" className="py-2 px-3 rounded-pill">
            <small>1 Urgent</small>
          </Badge>
        </div>
      </div>
      <section className=" d-flex gap-2 align-items-start">
        <div
          className="rounded-circle d-flex justify-content-center align-items-center bg-info"
          style={{ width: "40px", height: "40px" }}
        >
          <TbBuilding className="text-white" />
        </div>
        <Card className="p-3 bg-white rounded-3 flex-grow-1 shadow">
          <div className=" d-flex justify-content-between align-items-center">
            <p className="fs-6 fw-semibold">DIP Submitted to Lender</p>
            <p>
              <small>1/15/2024 at 14:30</small>
            </p>
          </div>
          <div className=" d-flex justify-content-between align-items-center">
            <p>
              <small>
                Tech Solutions Ltd
                <span className=" px-3">Adviser: Sarah Johnson</span>
                <span className=" px-3">Stage: Application Review</span>
                <span className=" px-3">Lender: Nationwide</span>
              </small>
            </p>
            <p>
              <Badge color="success" className="p-2 rounded-pill">
                <small>Completed</small>
              </Badge>
              <Badge color="warning" className="p-2 rounded-pill">
                <small>High</small>
              </Badge>
            </p>
          </div>
          <div className=" d-flex justify-content-between align-items-center">
            <p>
              <small>All required documents submitted successfully</small>
            </p>
            <p>
              <small>by Sarah Johnson</small>
            </p>
          </div>
          <hr />
          <div className=" d-flex justify-content-between align-items-center">
            <p>
              <small>Auto-synced to client file</small>
            </p>
            <Button color="primary" className="border-0">
              <TbPlus /> <small> Add Update</small>
            </Button>
          </div>
        </Card>
      </section>
      <section className=" d-flex gap-2 align-items-start">
        <div
          className="rounded-circle d-flex justify-content-center align-items-center bg-info"
          style={{ width: "40px", height: "40px" }}
        >
          <TbClock className="text-white" />
        </div>
        <Card className="p-3 bg-white rounded-3 flex-grow-1 shadow">
          <div className=" d-flex justify-content-between align-items-center">
            <p className="fs-6 fw-semibold">DIP Submitted to Lender</p>
            <p>
              <small>1/15/2024 at 14:30</small>
            </p>
          </div>
          <div className=" d-flex justify-content-between align-items-center">
            <p>
              <small>
                Tech Solutions Ltd
                <span className=" px-3">Adviser: Sarah Johnson</span>
                <span className=" px-3">Stage: Application Review</span>
                <span className=" px-3">Lender: Nationwide</span>
              </small>
            </p>
            <p>
              <Badge color="success" className="p-2 rounded-pill">
                <small>Completed</small>
              </Badge>
              <Badge color="warning" className="p-2 rounded-pill">
                <small>High</small>
              </Badge>
            </p>
          </div>
          <div className=" d-flex justify-content-between align-items-center">
            <p>
              <small>All required documents submitted successfully</small>
            </p>
            <p>
              <small>by Sarah Johnson</small>
            </p>
          </div>
          <hr />
          <div className=" d-flex justify-content-between align-items-center">
            <p>
              <small>Auto-synced to client file</small>
            </p>
            <Button color="primary" className="border-0">
              <TbPlus /> <small> Add Update</small>
            </Button>
          </div>
        </Card>
      </section>
      <section className=" d-flex gap-2 align-items-start">
        <div
          className="rounded-circle d-flex justify-content-center align-items-center bg-info"
          style={{ width: "40px", height: "40px" }}
        >
          <TbClock className="text-white" />
        </div>
        <Card className="p-3 bg-white rounded-3 flex-grow-1 shadow">
          <div className=" d-flex justify-content-between align-items-center">
            <p className="fs-6 fw-semibold">DIP Submitted to Lender</p>
            <p>
              <small>1/15/2024 at 14:30</small>
            </p>
          </div>
          <div className=" d-flex justify-content-between align-items-center">
            <p>
              <small>
                Tech Solutions Ltd
                <span className=" px-3">Adviser: Sarah Johnson</span>
                <span className=" px-3">Stage: Application Review</span>
                <span className=" px-3">Lender: Nationwide</span>
              </small>
            </p>
            <p>
              <Badge color="success" className="p-2 rounded-pill">
                <small>Completed</small>
              </Badge>
              <Badge color="warning" className="p-2 rounded-pill">
                <small>High</small>
              </Badge>
            </p>
          </div>
          <div className=" d-flex justify-content-between align-items-center">
            <p>
              <small>All required documents submitted successfully</small>
            </p>
            <p>
              <small>by Sarah Johnson</small>
            </p>
          </div>
          <hr />
          <div className=" d-flex justify-content-between align-items-center">
            <p>
              <small>Auto-synced to client file</small>
            </p>
            <Button color="primary" className="border-0">
              <TbPlus /> <small> Add Update</small>
            </Button>
          </div>
        </Card>
      </section>
    </Card>
  );
};

export default CaseTimeline;