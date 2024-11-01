import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ToastPlacementTitle } from "@/Constant";
import { ToastPlacementOptions, ToastPlacementSubTitle } from "@/Data/BonusUi/Toasts";
import React, { useState } from "react";
import { Card, CardBody, Col, Form, FormGroup, Input } from "reactstrap";
import ToastPlacementContent from "./ToastPlacementContent";

export const ToastPlacement = () => {
  const [selectedPosition, setSelectedPosition] = useState("");
  const handlePositionChange = (event: React.ChangeEvent<HTMLInputElement>) => setSelectedPosition(event.target.value);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={ToastPlacementTitle} span={ToastPlacementSubTitle} />
        <CardBody className="toast-rtl toast-dark">
          <Form>
            <FormGroup>
              <Input className="mt-2" name="toastPlacement" id="selectToastPlacement" type="select" value={selectedPosition} onChange={handlePositionChange}>
                {ToastPlacementOptions.map((options, index) => (
                  <option value={options.value} key={index}>
                    {options.label}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Form>
          <ToastPlacementContent selectedPosition={selectedPosition} />
        </CardBody>
      </Card>
    </Col>
  );
};
