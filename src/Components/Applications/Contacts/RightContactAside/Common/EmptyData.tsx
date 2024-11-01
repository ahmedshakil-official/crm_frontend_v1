import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import SearchNotFoundClass from "@/CommonComponent/SearchNotFound/SearchNotFoundClass";
import { EmptyDataProp } from "@/Types/ContactType";
import React from "react";
import { Card, CardBody } from "reactstrap";

export const EmptyData: React.FC<EmptyDataProp> = ({ title }) => {
  return (
    <Card className="mb-0">
      {title && <CommonCardHeader headClass="d-flex" title={title} span={[{ text: "0 Contacts" }]} />}
      <CardBody>
        <SearchNotFoundClass word="Contact" />
      </CardBody>
    </Card>
  );
};
