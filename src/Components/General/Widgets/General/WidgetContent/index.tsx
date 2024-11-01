import SvgIcon from "@/CommonComponent/SVG/IconSvg";
import { WidgetContentData } from "@/Data/General/Widgets/Chart/ChartsData";
import { Card, CardBody, Col } from "reactstrap";

const WidgetContent = () => {
  return (
    <>
      {WidgetContentData.map((item) => (
        <Col sm="6" xl="3" className="box-col-6" key={item.id}>
          <Card className="widget-1">
            <CardBody>
              <div className="widget-content">
                <div className={`widget-round ${item.color}`}>
                  <div className="bg-round">
                    <SvgIcon className="svg-fill" iconId={item.icon} />
                    <SvgIcon className="half-circle svg-fill" iconId="halfcircle" />
                  </div>
                </div>
                <div>
                  <h4>{item.rate}</h4>
                  <span className="f-light">{item.text}</span>
                </div>
              </div>
              <div className={`font-${item.color} f-w-500`}>
                <i className={`icon-arrow-${item.arrow} icon-rotate me-1`} />
                <span>
                  {item.percent}
                  {"%"}
                </span>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};
export default WidgetContent;
