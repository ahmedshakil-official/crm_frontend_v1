import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DangerAlertTitle } from "@/Constant";
import { DangerAlertSubTitle } from "@/Data/BonusUi/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

export const DangerAlert = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      showClass: {
        popup: "animate__animated animate__zoomIn",
      },
    });
  };
  return (
    <Col xl="3">
      <Card>
        <CommonCardHeader title={DangerAlertTitle} span={DangerAlertSubTitle} />
        <CardBody>
          <div className="common-flex">
            <Button color="info" className="text-light sweet-21" onClick={handleAlert}>
              {"Message Timer"}
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
