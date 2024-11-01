import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, WithOutlineTitle } from "@/Constant";
import { WithOutlineSubTitle } from "@/Data/BonusUi/Pagination";
import React from "react";
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";

const WithOutline = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={WithOutlineTitle} span={WithOutlineSubTitle} />
        <CardBody>
          <Pagination listClassName="outline-pagination text-primary">
            {[...Array(4)].map((_, index) => (
              <PaginationItem key={index} active={index+1 === 1 ? true : false}>
                <PaginationLink href={Href}>{index+1}</PaginationLink>
              </PaginationItem>
            ))}
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  );
};
export default WithOutline;
