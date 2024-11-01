import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Icons, Weather, WhetherIconsWithAnimations } from "@/Constant";
import { WeatherIconList } from "@/Data/Icons/WhetherIcon";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const WhetherIconContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Weather} parent={Icons} />
      <Container fluid>
        <Row className="icon-main">
          <Col sm="12">
            <Card>
              <CommonCardHeader headClass="f-w-700" title={WhetherIconsWithAnimations} />
              <CardBody>
                <Row className="icon-lists icon-event whether-icon">
                  {WeatherIconList.map((icon, i) => (
                    <Col xxl="2" lg="4" xs="12" md="6" className="icons-item" key={i}>
                      <Card className="d-flex align-items-center default-border m-0">{icon.icon}</Card>
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WhetherIconContainer;
