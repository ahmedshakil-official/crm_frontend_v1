import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BothSideScrollbarTitle } from "@/Constant";
import { BothSideScroll, BothSideScrollSubTitle } from "@/Data/BonusUi/Scrollable";
import Scrollbars from "react-custom-scrollbars-2";
import { Card, CardBody, Col, Row } from "reactstrap";

export const BothSideScrollbar = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={BothSideScrollbarTitle} span={BothSideScrollSubTitle} />
        <CardBody>
          <div className="scroll-bar-wrap">
            <Scrollbars className="visible-scroll always-visible scroll-demo custom-container" style={{ width: "100%", height: "300px" }}>
              <div className="horz-scroll-content scroll-content-width">
                <Row>
                  {BothSideScroll &&
                    BothSideScroll.map((item, index) => (
                      <Col sm="3" key={index}>
                        {item.text}
                      </Col>
                    ))}
                </Row>
              </div>
            </Scrollbars>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
