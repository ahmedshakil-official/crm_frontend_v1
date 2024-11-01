import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, WithDisabledTitle } from "@/Constant";
import { WithDisabledData, WithDisabledSubTitle } from "@/Data/BonusUi/Pagination";
import React from "react";
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";

const WithDisabled = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={WithDisabledTitle} span={WithDisabledSubTitle} />
        <CardBody>
          <Pagination>
            {WithDisabledData &&
              WithDisabledData.map((item, index) => (
                <PaginationItem key={index} disabled={index === 2 ? true : false}>
                  <PaginationLink href={Href}>{item}</PaginationLink>
                </PaginationItem>
              ))}
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  );
};
export default WithDisabled;
