import { DarkBackgroundTitle } from "@/Constant";
import { BorderColorData } from "@/Data/Uikits/HelperClasses";
import { Col } from "reactstrap";

export const DarkBackground = () => {
  return (
    <Col xl="4" sm="6">
      <div className="border-wrapper h-100 border">
        <h5 className="f-w-600 mb-3">{DarkBackgroundTitle}</h5>
        {BorderColorData &&
          BorderColorData.map((item, index) => (
            <div className={`d-flex align-items-center gap-2 ${index !== BorderColorData.length - 1 ? "mb-2" : ""}`} key={index}>
              <div className={`helper-box bg-${item}`} />
              <span>{`.bg-${item}`}</span>
            </div>
          ))}
      </div>
    </Col>
  );
};
