import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { UniqueSweetAlertTitle } from "@/Constant";
import { InfoAlertSubTitle, UniqueOptions } from "@/Data/BonusUi/SweetAlert";
import { AlertOptions } from "@/Types/BonusUiType";
import React from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

export const UniqueSweetalert = () => {
  const showAlert = (title: string, type: keyof AlertOptions) => {
    Swal.fire({ title, ...UniqueOptions[type] });
  };
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={UniqueSweetAlertTitle} span={InfoAlertSubTitle} />
        <CardBody>
          <div className="common-flex">
            <Button color="danger" className="sweet-7" onClick={() => showAlert("Oops...", "danger")}>
              {"Danger mode"}
            </Button>
            <Button color="warning" className="text-light sweet-6" onClick={() => showAlert("Custom animation with Animate.css", "animate")}>
              {"Animation Alert"}
            </Button>
            <Button color="primary" className="sweet-14" onClick={() => showAlert("Timer Alert", "timer")}>
              {"Timer"}
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
