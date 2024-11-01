import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, SmallSizeScrollTitle } from "@/Constant";
import { SmallSizeScrollSubTitle } from "@/Data/BonusUi/Scrollable";
import Image from "next/image";
import Scrollbars from "react-custom-scrollbars-2";
import { Card, CardBody, Col } from "reactstrap";

export const SmallSizeScroll = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={SmallSizeScrollTitle} span={SmallSizeScrollSubTitle} />
        <CardBody>
          <div className="scroll-bar-wrap">
            <Scrollbars style={{ width: "100%", height: "300px" }} className="scrollbar-margins large-margin scroll-demo pe-0 custom-container" autoHide>
              <div className="margin-scrollbar">
                <h5 className="pb-2">{"Solution for Business Transformation"}</h5>
              </div>
              <p>
                {"The Business Transformation Solution programme is a "}
                <em className="text-danger">{"multi-level engagement program"}</em>
                {" is designed to help Small and Medium-Sized Businesses and Startups create a strong, well-functioning business organization that produces the best results quickly and effectively."}
                <Image width={740} height={491} className="img-fluid pt-3" src={`${ImagePath}/banner/3.jpg`} alt="business" />
              </p>
              <p>
                {"The core of the programme is our internally developed "}
                <em className="text-danger">{"Business Management model"}</em>
                {', "Business Foundation & Management", which was tried and true for Indian business conditions while drawing inspiration from other successful global SME Business Management techniques.'}
              </p>
            </Scrollbars>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
