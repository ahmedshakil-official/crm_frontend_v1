import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SuccessMessageTitle } from "@/Constant";
import { SuccessMessageSubTitle } from "@/Data/BonusUi/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

export const SuccessMessage = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b>2000</b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };
  return (
    <Col xl="3">
      <Card>
        <CommonCardHeader title={SuccessMessageTitle} span={SuccessMessageSubTitle} />
        <CardBody>
          <div className="common-flex">
            <Button color="danger" className="sweet-20" onClick={handleAlert}>
              {"Message Timer"}
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
