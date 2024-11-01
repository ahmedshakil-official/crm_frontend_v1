import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicAlertTitle } from "@/Constant";
import { AlertOptionsData, BasicAlertSubTitle } from "@/Data/BonusUi/SweetAlert";
import { AlertOptions } from "@/Types/BonusUiType";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

export const BasicAlert = () => {
  const showAlert = (title: string, text: string, type: keyof AlertOptions) => {
    Swal.fire({ title, text, ...AlertOptionsData[type] }).then((result) => {
      if (result.isConfirmed && type === "warning") {
        Swal.fire({ title: "Deleted!", text: "Your file has been deleted.", icon: "success" });
      }
    });
  };
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={BasicAlertTitle} span={BasicAlertSubTitle} />
        <CardBody>
          <Button color="primary" className="sweet-1 me-2" onClick={() => showAlert("Good job!", "You clicked the button!", "success")}>
            {"Click it!"}
          </Button>
          <Button color="secondary" className="sweet-2 me-2" onClick={() => showAlert("It's Magic!", "Thank you for visiting CRM", "success")}>
            {"Title with text!"}
          </Button>
          <Button color="info" className="sweet-4 me-2" onClick={() => showAlert("The Internet?", "That thing is still around?", "question")}>
            {"Informational"}
          </Button>
          <Button color="warning" className="sweet-1" onClick={() => showAlert("Are you sure?", "You won't be able to revert this!", "warning")}>
            {"Warning alert!"}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};
