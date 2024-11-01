import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, LinkLightColorTitle } from "@/Constant";
import { AlertLightColorData, LinkColorSubTitle } from "@/Data/Uikits/Alert";
import { Fragment } from "react";
import { Alert, Card, CardBody, Col, Row } from "reactstrap";

export const LinkLightColor = () => {
  return (
    <Col xl="12" className="alert-theme">
      <Card>
        <CommonCardHeader title={LinkLightColorTitle} span={LinkColorSubTitle} />
        <CardBody>
          <Row>
            {AlertLightColorData &&
              AlertLightColorData.map((item, index) => (
                <Col xl="6" key={index}>
                  {item.data &&
                    item.data.map((item, index) => (
                      <Fragment key={index}>
                        <p className="mb-1">{item.text}</p>
                        <Alert color={`light-${item.class}`} className={`dark ${item.class === "info" || item.class === "dark" ? "mb-0" : ""}`}>
                          <p className={`text-${item.textClass}`}>
                            {"This is a"}
                            <a className={`alert-link text-${item.textClass}`} href={Href}>
                              {item.class} {"alert"}
                            </a>
                            {"with an example link.Check it out."}
                          </p>
                        </Alert>
                      </Fragment>
                    ))}
                </Col>
              ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
