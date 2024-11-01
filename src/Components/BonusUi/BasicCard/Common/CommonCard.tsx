import { Card, CardBody, CardFooter, CardHeader, Col } from "reactstrap";
import { CRMTheme } from "@/Constant";
import { CommonCardProp } from "@/Types/BonusUiType";

const CommonCard :React.FC<CommonCardProp>= ({ data }) => {
  return (
    <>
      <Col xl="4" sm={data.sm}>
        <Card className="height-equal">
          <CardHeader className={data.headerClass}>
            <h3 className={data.headingClass}>{data.title}</h3>
          </CardHeader>
          <CardBody className={data.bodyClass}>
            <h5 className={`pb-2 ${data.textClass ? data.textClass : ""}`}>{data.text}</h5>
            <p className="mb-0">{data.span}</p>
          </CardBody>
          <CardFooter className={data.footerClass}>
            <h6 className={`"mb-0 text-end ${data.footerTextClass ? data.footerTextClass : ""}`}>{CRMTheme}</h6>
          </CardFooter>
        </Card>
      </Col>
    </>
  );
};

export default CommonCard;
