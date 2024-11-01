import { TextColorsTitle } from "@/Constant";
import { BorderColorData } from "@/Data/Uikits/HelperClasses";
import { Col } from "reactstrap";

export const TextColors = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="border-wrapper bg-light font-dark h-100 dark-helper border">
        <h5 className="f-w-600 mb-3">{TextColorsTitle}</h5>
        {BorderColorData &&
          BorderColorData.map((item, index) => (
            <div className="d-flex align-items-center mb-2 gap-2" key={index}>
              <div className={`helper-box helper-text border text-${item} ${index === BorderColorData.length - 1 ? "bg-dark" : ""}`}>{"A "}</div>
              <span>{`.text-${item}`}</span>
            </div>
          ))}
      </div>
    </Col>
  );
};
