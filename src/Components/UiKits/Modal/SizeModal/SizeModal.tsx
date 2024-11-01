import { Card, CardBody, Col } from "reactstrap";
import {ExtraLarge} from "./ExtraLarge";
import {FullScreen} from "./FullScreen";
import {LargeModal} from "./LargeModal";
import {SmallModal} from "./SmallModal";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SizeModalTitle } from "@/Constant";
import { SizeModalSubTitle } from "@/Data/Uikits/Modal";

export const SizeModal = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={SizeModalTitle} span={SizeModalSubTitle} />
        <CardBody className="badge-spacing">
          <FullScreen />
          <ExtraLarge />
          <LargeModal />
          <SmallModal />
        </CardBody>
      </Card>
    </Col>
  );
};
