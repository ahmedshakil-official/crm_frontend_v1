import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CustomScrollbarTitle, ImagePath } from "@/Constant";
import { CustomScrollbarSubTitle } from "@/Data/BonusUi/Scrollable";
import Image from "next/image";
import Scrollbars from "react-custom-scrollbars-2";
import { Card, CardBody, Col } from "reactstrap";

export const CustomScrollbar = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={CustomScrollbarTitle} span={CustomScrollbarSubTitle} />
        <CardBody>
          <Scrollbars style={{ width: "100%", height: "300px" }} className="vertical-scroll scroll-demo custom-container" autoHide>
            <h5 className="pb-2">{CustomScrollbarTitle}</h5>
            <p>
              {"I'm quite interested in learning more about "}
              <em className="text-danger">{"custom scrollbars"}</em>
              {" because they are becoming more and more common."}
            </p>
            <div className="scrollbar-images">
              <Image width={730} height={485} priority className="img-fluid" src={`${ImagePath}/banner/1.jpg`} alt="banner" />
            </div>
            <p>{"There are various justifications for customizing a scrollbar. For instance, the default scrollbar can cause an app's user interface to look inconsistent across various operating systems. In this case, having a single style is helpful"}</p>
            <p>{"I never had the opportunity to learn about CSS scrollbar customization, but I have always been interested in doing so. I'll take the chance to learn more about them and share my trip in this essay."}</p>
            <p>
              {"One crucial point to remember is that, depending on the design, a scrollbar may operate either "}
              <em className="text-danger">{"horizontally or vertically"}</em> {". Additionally, it might alter when you work on a website that is global and operates in both left-to-right and right-to-left orientations."}
            </p>
          </Scrollbars>
        </CardBody>
      </Card>
    </Col>
  );
};
