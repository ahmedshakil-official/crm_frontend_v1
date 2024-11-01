import { AllLocations, LocationHeading } from "@/Constant";
import { LocationCheckBoxData } from "@/Data/Miscellaneous/JobSearch/JobSearchData";
import { useState } from "react";
import { Button, Card, CardBody, Col, Collapse, Input, Label } from "reactstrap";
import HeaderWithIcon from "./HeaderWithIcon";

const Location = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl="12">
      <Card>
        <HeaderWithIcon heading={LocationHeading} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Collapse isOpen={isOpen}>
          <CardBody className="animate-chk basic-form">
            <div className="location-checkbox">
              {LocationCheckBoxData.map((data, index) => (
                <Label className="d-block" htmlFor={`checkbox-${index}`} key={index} check>
                  <Input className="checkbox_animated" id={`checkbox-${index}`} type="checkbox" />
                  {data.location}
                  {data.locationSpanText}
                </Label>
              ))}
            </div>
          </CardBody>
          <Button block className="text-center w-100" color="primary">
            {AllLocations}
          </Button>
        </Collapse>
      </Card>
    </Col>
  );
};

export default Location;
