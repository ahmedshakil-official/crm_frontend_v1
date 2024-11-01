import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, LinkColorTitle } from "@/Constant";
import { AlertColorData, LinkColorSubTitle } from "@/Data/Uikits/Alert";
import { Fragment } from "react";
import { Alert, Card, CardBody, Col, Row } from "reactstrap";

export const LinkDarkColor = ()=> {
  return (
    <Col xl="12" className="alert-theme">
      <Card>
        <CommonCardHeader title={LinkColorTitle} span={LinkColorSubTitle} />
        <CardBody>
          <Row>
            {AlertColorData &&
              AlertColorData.map((item, index) => (
                <Col xl="6" key={index}>
                  {item.data &&
                    item.data.map((item, index) => (
                      <Fragment key={index}>
                        <p className="mb-1">{item.text} {" Alert"}</p>
                        <Alert
                          color={item.class}
                          className={`dark ${item.class === "success" || item.class === "dark" ? "mb-0" : ""} 
                                            ${item.class === "light" ? "text-dark" : ""}`}
                        >
                          <p>{"This is a"}
                            <a className={`alert-link ${item.class !== "light" ? "text-white" : "text-dark"}`} href={Href}>{item.class} {"alert"}</a>
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
}
