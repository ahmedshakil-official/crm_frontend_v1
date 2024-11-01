import { BorderColorTitle } from "@/Constant";
import { BorderColorData } from "@/Data/Uikits/HelperClasses";
import { Col } from "reactstrap";

export const BorderColor = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="border-wrapper h-100 bg-light font-dark dark-helper border">
        <h5 className="f-w-600 mb-3">{BorderColorTitle}</h5>
        {BorderColorData &&
          BorderColorData.slice(0, 7).map((item, index) => (
            <div className={`d-flex align-items-center gap-2 ${index !== BorderColorData.length - 1 ? "mb-2" : ""}`} key={index}>
              <div className={`helper-box border border-${item}`} />
              <span>{`.border-${item}`}</span>
            </div>
          ))}
      </div>
    </Col>
  );
};
