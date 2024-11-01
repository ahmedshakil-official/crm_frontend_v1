import { Input, Label } from "reactstrap";
import { CategoriesLearning } from "@/Constant";
import { LearningFilterData } from "@/Data/Miscellaneous/Learning/learningData";

const CategoriesCheckBox = () => {
  return (
    <div className="checkbox-animated">
      <div className="learning-header">
        <span className="f-w-600">{CategoriesLearning}</span>
      </div>
      {LearningFilterData.map((data, index) => (
        <Label key={index} className="d-block" htmlFor={`chk-ani-${index}`}>
          <Input className="checkbox_animated" id={`chk-ani-${index}`} type="checkbox" />{data}</Label>
      ))}
    </div>
  );
};

export default CategoriesCheckBox;
