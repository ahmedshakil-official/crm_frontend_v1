import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { IconsCommonProps } from "@/Types/IconsTypes";
import { Card, CardBody, Col, Row } from "reactstrap";

const FontAwesomeCard: React.FC<IconsCommonProps> = ({ iconType, title, parentCallback }) => {
  const getITag = (tag: string) => {
    parentCallback(tag);
  };

  return (
    <Card>
      <CommonCardHeader title={title} headClass="f-w-700" />
      <CardBody>
        <Row className="icon-lists icon-event iconly-icons">
          {iconType?.map((item, i) => (
            <Col xxl="2" lg="4" xs="12" md="6" className="icons-item" onClick={() => getITag(item)} key={i}>
              <Card className="d-flex align-items-center default-border m-0">
                <i className={`${item}`}></i>
                <h5 className="mt-0 me-2">{item}</h5>
              </Card>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
};

export default FontAwesomeCard;
