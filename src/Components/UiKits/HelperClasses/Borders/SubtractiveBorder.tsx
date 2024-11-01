import { SubtractiveBorderTitle } from "@/Constant";
import { SubtractiveData } from "@/Data/Uikits/HelperClasses";
import { Col } from "reactstrap";

export const SubtractiveBorder = () => {
  return (
    <Col md="4" sm="6">
      <div className="border-wrapper h-100 border">
        <h5 className="f-w-600 mb-3">{SubtractiveBorderTitle}</h5>
        {SubtractiveData &&
          SubtractiveData.map((item, index) => (
            <div className={`d-flex align-items-center gap-2 ${index !== SubtractiveData.length - 1 ? "mb-2" : ""}`} key={index}>
              <div className={`helper-box bg-light border border-${item}`} />
              <span>{`.border-${item}`}</span>
            </div>
          ))}
      </div>
    </Col>
  );
};
