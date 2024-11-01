import { LightBackgroundsTitle } from "@/Constant";
import { BorderColorData } from "@/Data/Uikits/HelperClasses";
import { Col } from "reactstrap";

export const LightBackground = () => {
  return (
    <Col xl="4" sm="6">
      <div className="border-wrapper h-100 border">
        <h5 className="f-w-600 mb-3">{LightBackgroundsTitle}</h5>
        {BorderColorData &&
          BorderColorData.slice(0, 7).map((item, index) => (
            <div className="d-flex align-items-center mb-2 gap-2" key={index}>
              <div className={`helper-box alert-light-${item}`} />
              <span>{`.alert-light-${item}`}</span>
            </div>
          ))}
      </div>
    </Col>
  );
};
