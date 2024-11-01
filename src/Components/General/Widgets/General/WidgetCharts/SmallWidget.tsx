import SvgIcon from "@/CommonComponent/SVG/IconSvg";
import { SmallWidgetData } from "@/Data/General/Widgets/Chart/ChartsData";
import { Card, CardBody, Col } from "reactstrap";

export const SmallWidget = () => {
  return (
    <>
      {SmallWidgetData.map((item) => (
        <Col sm="6" key={item.id}>
          <Card className="small-widget mb-sm-0">
            <CardBody className={item.color}>
              <span className="f-light">{item.text}</span>
              <div className="d-flex align-items-end gap-1">
                <h4>{item.rate}</h4>
                <span className={`font-${item.color} f-12 f-w-500`}>
                  <i className={`icon-arrow-${item.arrow}`} />
                  <span>
                    {item.percent}
                    {"%"}
                  </span>
                </span>
              </div>
              <div className="bg-gradient">
                <SvgIcon className="stroke-icon svg-fill" iconId={item.icon} />
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};
