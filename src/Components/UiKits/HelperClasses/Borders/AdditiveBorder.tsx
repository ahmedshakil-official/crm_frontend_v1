import { AdditiveBorderTitle } from "@/Constant";
import { AdditiveBorderData } from "@/Data/Uikits/HelperClasses";
import { Col } from "reactstrap";

export const AdditiveBorder = () => {
  return (
    <Col md="4" sm="6">
      <div className="border-wrapper h-100 border">
        <h5 className="f-w-600 mb-3">{AdditiveBorderTitle}</h5>
        {AdditiveBorderData &&
          AdditiveBorderData.map((item, index) => (
            <div className={`d-flex align-items-center gap-2 ${index !== AdditiveBorderData.length - 1 ? "mb-2" : ""}`} key={index}>
              <div className={`helper-box bg-light ${item}`} />
              <span>{`.${item}`}</span>
            </div>
          ))}
      </div>
    </Col>
  );
};
