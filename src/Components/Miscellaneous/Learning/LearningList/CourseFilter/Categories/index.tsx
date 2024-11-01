import { useState } from "react";
import { Card, CardBody, Col, Collapse } from "reactstrap";
import CommonLearningHeader from "../Common/CommonLearningHeader";
import DesignCategories from "./DesignCategories";
import DevelopmentCategories from "./DevelopmentCategories";
import { CategoriesTitleLearning } from "@/Constant";

const CategoriesCheckBoxes = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Col xl="12">
      <Card>
        <CommonLearningHeader heading={CategoriesTitleLearning} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Collapse isOpen={isOpen}>
          <CardBody>
            <DesignCategories />
            <DevelopmentCategories />
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default CategoriesCheckBoxes;
