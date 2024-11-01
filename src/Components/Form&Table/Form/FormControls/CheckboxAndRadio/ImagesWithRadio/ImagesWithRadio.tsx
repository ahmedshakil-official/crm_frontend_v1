import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath, ImagesWithRadioTitle } from "@/Constant";
import { ImageWithRadioData, ImagesWithRadioBoxSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { Card, CardBody, Col, Input, Label, Row } from "reactstrap";

export const ImagesWithRadio = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={ImagesWithRadioTitle} span={ImagesWithRadioBoxSubTitle} />
        <CardBody>
          <div className="main-img-checkbox">
            <Row className="g-3">
              {ImageWithRadioData.map((data) => (
                <Col xxl="3" sm="6" key={data.id}>
                  <div className="card-wrapper border rounded-3 checkbox-checked">
                    <h6 className="sub-title">{data.title}</h6>
                    <div className="img-checkbox">
                      <Input className="main-img-cover" id={`img-radio-${data.id}`} type="radio" name="radio6" defaultChecked={data.check ? true : false} disabled={data.disabled ? true : false} />
                      <Label className="mb-0" htmlFor={`img-radio-${data.id}`} check>
                        <RatioImage src={`${ImagePath}/switch/${data.image}`} alt="images" />
                      </Label>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
