import { AllSkills, SpecificSkills } from "@/Constant";
import { SkillCheckBoxData } from "@/Data/Miscellaneous/JobSearch/JobSearchData";
import { useState } from "react";
import { Button, Card, CardBody, Col, Collapse, Input, Label } from "reactstrap";
import HeaderWithIcon from "./HeaderWithIcon";

const SkillClass = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl="12">
      <Card>
        <HeaderWithIcon heading={SpecificSkills} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Collapse isOpen={isOpen}>
          <CardBody className="animate-chk">
            {SkillCheckBoxData.map((data, index) => (
              <Label className="d-block" key={index} htmlFor={`checkbox-animate-${index}`} check>
                <Input className="checkbox_animated" id={`checkbox-animate-${index}`} type="checkbox" />
                {data}
              </Label>
            ))}
          </CardBody>
          <Button block className="text-center w-100" color="primary">
            {AllSkills}
          </Button>
        </Collapse>
      </Card>
    </Col>
  );
};

export default SkillClass;
