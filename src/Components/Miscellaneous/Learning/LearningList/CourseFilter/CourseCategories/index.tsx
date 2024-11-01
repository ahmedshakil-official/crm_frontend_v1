import { FilterLearning, FindCourseLearning } from "@/Constant";
import { useState } from "react";
import { Button, Card, CardBody, Col, Collapse } from "reactstrap";
import CommonLearningHeader from "../Common/CommonLearningHeader";
import CategoriesCheckBox from "./CategoriesCheckBox";
import DurationCheckBox from "./DurationCheckBox";
import PriceCheckBox from "./PriceCheckBox";
import SearchInput from "./SearchInput";
import StatusCheckBox from "./StatusCheckBox";

const CourseCategories = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl="12">
      <Card>
        <CommonLearningHeader heading={FindCourseLearning} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Collapse isOpen={isOpen}>
          <CardBody className="filter-cards-view animate-chk basic-form">
            <SearchInput />
            <CategoriesCheckBox />
            <DurationCheckBox />
            <PriceCheckBox />
            <StatusCheckBox />
            <Button color="primary" className="text-center">{FilterLearning}</Button>
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default CourseCategories;
