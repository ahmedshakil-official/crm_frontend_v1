import { AdditiveRadiusTitle } from "@/Constant";
import { AdditiveRadiusData } from "@/Data/Uikits/HelperClasses";
import { Col } from "reactstrap";

export const AdditiveRadius = () => {
  return (
    <Col md="4" sm="12">
      <div className="border-wrapper h-100 border">
        <h5 className="f-w-600 mb-3">{AdditiveRadiusTitle}</h5>
        {AdditiveRadiusData &&
          AdditiveRadiusData.map((item, index) => (
            <div className={`d-flex align-items-center gap-2 ${index !== AdditiveRadiusData.length - 1 ? "mb-2" : ""}`} key={index}>
              <div className={`helper-radius radius-wrapper ${item}`} />
              <span>{`.${item}`}</span>
            </div>
          ))}
      </div>
    </Col>
  );
};
