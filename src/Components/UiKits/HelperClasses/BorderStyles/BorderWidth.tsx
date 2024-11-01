import { BorderWidthTitle } from "@/Constant";
import { Col } from "reactstrap";

export const BorderWidth = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="border-wrapper h-100 bg-light font-dark dark-helper border">
        <h5 className="f-w-600 mb-3">{BorderWidthTitle}</h5>
        {[...Array(5)].map((_, index) => (
          <div className="d-flex align-items-center mb-2 gap-2" key={index}>
            <div className={`helper-box border border-${index + 1}`} />
            <span>{`.border-${index + 1}`}</span>
          </div>
        ))}
      </div>
    </Col>
  );
};
