import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HelperCardTitle } from "@/Constant";
import { HelperCardData, HelperCardSubTitle } from "@/Data/Uikits/Dropdown";
import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { HelperCardBody } from "./HelperCardBody";

export const HelperCard = () => {
  return (
    <Col xl="6">
      <Card className="custom-helper-card">
        <CommonCardHeader title={HelperCardTitle} span={HelperCardSubTitle} />
        <CardBody>
          <div className="common-flex">
            {HelperCardData &&
              HelperCardData.map((item, index) => (
                <Fragment key={index}>
                  <HelperCardBody item={item} />
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
