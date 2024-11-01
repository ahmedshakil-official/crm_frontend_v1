import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { RtlSupportTitle } from "@/Constant";
import { UserNameAlertSubTitle } from "@/Data/BonusUi/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

export const RtlSupport = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "هل تريد الاستمرار؟",
      icon: "question",
      iconHtml: "؟",
      confirmButtonText: "نعم",
      cancelButtonText: "لا",
      showCancelButton: true,
      showCloseButton: true,
    });
  };
  return (
    <Col xl="3">
      <Card>
        <CommonCardHeader title={RtlSupportTitle} span={UserNameAlertSubTitle} />
        <CardBody>
          <div className="common-flex">
            <Button color="secondary" className="sweet-15" onClick={handleAlert}>
              {"RTL Alert"}
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
