import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { OrgenizationTitle } from "@/Constant";
import { OrganizationList } from "@/Data/Applications/Contacts/Contacts";
import { useState } from "react";
import { Card, CardBody, Col, Row, TabContent, TabPane } from "reactstrap";
import { NavOrganization } from "./NavOrganization";
import { OrganizationTabPane } from "./OrganizationTabPane";

export const OrganizationTab = () => {
  const [orgActiveTab, setOrgActiveTab] = useState(1);

  return (
    <Card className="mb-0">
      <CommonCardHeader headClass="d-flex" title={OrgenizationTitle} span={[{ text: "5 Contacts" }]} />
      <CardBody className="p-0">
        <Row className="list-persons">
          <NavOrganization orgActiveTab={orgActiveTab} setOrgActiveTab={setOrgActiveTab} />
          <Col xl={8} md={7} className="xl-50">
            <TabContent activeTab={orgActiveTab}>
              {OrganizationList.map((user) => (
                <TabPane tabId={user.id} key={user.id}>
                  <OrganizationTabPane user={user} />
                </TabPane>
              ))}
            </TabContent>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
