import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CommonButtonsInterface } from "@/Types/ButtonsType";
import React, { Fragment } from "react";
import { Button, Card, CardBody } from "reactstrap";
import { CommonToolTip } from "./CommonToolTip";

export const CommonButtons: React.FC<CommonButtonsInterface> = ({ commonButtonsData, title, subTitle }) => {
  return (
    <Card>
      <CommonCardHeader title={title} span={subTitle} />
      <CardBody className="btn-showcase">
        {commonButtonsData.map((data, index) => (
          <Fragment key={index}>
            <Button className={data.btnClass ? data.btnClass : ""} outline={data.outline} active={data.active} disabled={data.disabled} size={data.size ? data.size : ""} id={data.id} color={data.color}>
              {data.title}
            </Button>
            <CommonToolTip toolTipText={data.toolTipText} id={data.id} />
          </Fragment>
        ))}
      </CardBody>
    </Card>
  );
};
