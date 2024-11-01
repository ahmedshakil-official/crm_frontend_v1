import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicModalTitle } from "@/Constant";
import { BasicModalSubTitle } from "@/Data/Uikits/Modal";
import { Card, CardBody, Col } from "reactstrap";
import { CRMModel } from "./CRMModal";
import { ScrollingModal } from "./ScrollingModal";
import { SimpleModal } from "./SimpleModal";
import { TooltipModal } from "./TooltipModal";

export const BasicModal = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader
          headClass="pb-0"
          title={BasicModalTitle}
          span={BasicModalSubTitle}
        />
        <CardBody className="badge-spacing">
          <SimpleModal />
          <ScrollingModal />
          <TooltipModal />
          <CRMModel />
        </CardBody>
      </Card>
    </Col>
  );
};
