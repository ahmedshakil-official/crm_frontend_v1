import { FilterHeading, FindJobs, LocationPlaceholder, SearchPlaceholder } from "@/Constant";
import { CheckBoxData } from "@/Data/Miscellaneous/JobSearch/JobSearchData";
import { useState } from "react";
import { MapPin, Search } from "react-feather";
import { Button, Card, CardBody, Collapse, Input, Label } from "reactstrap";
import HeaderWithIcon from "./HeaderWithIcon";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="accordion" id="accordionExample">
      <Card>
        <HeaderWithIcon heading={FilterHeading} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Collapse isOpen={isOpen}>
          <CardBody className="filter-cards-view animate-chk basic-form">
            <div className="job-filter  mb-2">
              <div className="faq-form">
                <Input type="text" placeholder={SearchPlaceholder} />
                <Search className="search-icon" />
              </div>
            </div>
            <div className="job-filter">
              <div className="faq-form">
                <Input type="text" placeholder={LocationPlaceholder} />
                <MapPin className="search-icon" />
              </div>
            </div>
            <div className="checkbox-animated">
              {CheckBoxData.map((data, index) => (
                <Label className="d-block" htmlFor={`chk-ani-${index}`} key={index} check>
                  <Input className="checkbox_animated" id={`chk-ani-${index}`} type="checkbox" />
                  {data.inputTittle} {data.inputNumber}
                </Label>
              ))}
            </div>
            <Button className="text-center w-100" color="primary">{FindJobs}</Button>
          </CardBody>
        </Collapse>
      </Card>
    </div>
  );
};

export default Filter;
