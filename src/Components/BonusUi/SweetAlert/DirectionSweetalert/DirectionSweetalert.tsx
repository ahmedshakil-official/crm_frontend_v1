import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DirectionSweetalertTitle } from "@/Constant";
import { DirectionOptions, WarningAlertSubTitle } from "@/Data/BonusUi/SweetAlert";
import { AlertOptions } from "@/Types/BonusUiType";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

export const DirectionSweetalert = () => {
  const showAlert = (type: keyof AlertOptions) => {
    Swal.fire({ ...DirectionOptions[type] });
  };
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={DirectionSweetalertTitle} span={WarningAlertSubTitle} />
        <CardBody>
          <div className="common-flex">
            <Button color="info" className="text-light sweet-17" onClick={() => showAlert("error")}>
              {"Top Left"}
            </Button>
            <Button color="primary" className="sweet-16" onClick={() => showAlert("success")}>
              {"Top Right"}
            </Button>
            <Button color="secondary" className="sweet-18" onClick={() => showAlert("info")}>
              {"Bottom Left"}
            </Button>
            <Button color="warning" className="text-light sweet-19" onClick={() => showAlert("success2")}>
              {"Bottom Right"}
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
