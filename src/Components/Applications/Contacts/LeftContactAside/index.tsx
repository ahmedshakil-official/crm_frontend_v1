import { ContactFilter } from "@/Constant";
import { LeftContactAsideProps } from "@/Types/ContactType";
import React, { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { ProfileHeader } from "./Common/ProfileHeader";
import { ContactNav } from "./ContactNav";

export const LeftContactAside: React.FC<LeftContactAsideProps> = ({ activeTab, setActiveTab, changeTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Col xxl={3} xl={4} className="box-col-6">
      <div className="md-sidebar">
        <Button color="primary" className="md-sidebar-toggle" onClick={toggle}>
          {ContactFilter}
        </Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? "open" : ""}`}>
          <div className="email-left-aside">
            <Card>
              <CardBody>
                <div className="email-app-sidebar left-bookmark">
                  <ProfileHeader />
                  <ContactNav activeTab={activeTab} setActiveTab={setActiveTab} changeTab={changeTab} />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
};
