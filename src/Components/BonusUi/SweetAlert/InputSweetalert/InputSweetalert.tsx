import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { InputSweetalertTitle } from "@/Constant";
import { InputConfirmOptions, InputOptions, PikachuAlertSubTitle } from "@/Data/BonusUi/SweetAlert";
import { AlertOptions } from "@/Types/BonusUiType";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

export const InputSweetalert = () => {
  const showAlert = (type: keyof AlertOptions) => {
    Swal.fire({ ...InputOptions[type] }).then((result) => {
      if (result.isConfirmed) {
        const matchedOption = InputConfirmOptions.find((option) => option.includes(String(type)));
        const title = matchedOption ? `${matchedOption} ${result.value}` : result.value;
        Swal.fire({ title });
      }
    });
  };
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader title={InputSweetalertTitle} span={PikachuAlertSubTitle} />
        <CardBody>
          <div className="common-flex">
            <Button color="success" className="sweet-22" onClick={() => showAlert("text")}>{"Text Input"}</Button>
            <Button color="warning" className="text-light sweet-8" onClick={() => showAlert("email")}>{"Login Email"}</Button>
            <Button color="info" className="text-light sweet-23" onClick={() => showAlert("url")}>{"URL"}</Button>
            <Button color="danger" className="sweet-24" onClick={() => showAlert("password")}>{"Password"}</Button>
            <Button color="warning" className="text-light sweet-25" onClick={() => showAlert("message")}>{"Textarea"}</Button>
            <Button color="primary" className="sweet-26" onClick={() => showAlert("select")}>{"Select Input"}</Button>
            <Button color="secondary" className="sweet-27" onClick={() => showAlert("color")}>{"Radio Input"}</Button>
            <Button color="dark" className="sweet-28" onClick={() => showAlert("terms")}>{"Checkbox Input"}</Button>
            <Button color="light" className="font-dark sweet-29" onClick={() => showAlert("range")}>{"Range"}</Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
