import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AdvanceAlertTitle } from "@/Constant";
import { TitleWithTextSubTitle, AdvanceOptions } from "@/Data/BonusUi/SweetAlert";
import { AlertOptions } from "@/Types/BonusUiType";
import React from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

export const AdvanceAlert = () => {
  const showAlert = (title: string, type: keyof AlertOptions) => {
    Swal.fire({ title, ...AdvanceOptions[type] }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({ icon: "success", title: "Saved!" });
      } else if (result.isDenied) {
        Swal.fire({ title: "Changes are not saved", icon: "info" });
      }
    });
  };
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={AdvanceAlertTitle} span={TitleWithTextSubTitle} />
        <CardBody>
          <div className="common-flex">
            <Button color="warning" className="text-light sweet-12" onClick={() => showAlert("Do you want to save the changes?", "question")}>
              {"Questions state"}
            </Button>
            <Button color="secondary" className="sweet-13" onClick={() => showAlert("Signed in successfully!", "toast")}>
              {"Toast Alert"}
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
