import { CustomBorderTitle } from "@/Constant";
import { Col } from "reactstrap";

export const CustomBorder = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="border-wrapper h-100 bg-light font-dark dark-helper border">
        <h5 className="f-w-600 mb-3">{CustomBorderTitle}</h5>
        {[...Array(6)].map((_, index) => (
            <div className="d-flex align-items-center mb-2 gap-2" key={index}>
              <div className={`helper-box bg-light border rounded-${index}`} />
              <span>{`.rounded-${index}`}</span>
            </div>
          ))}
      </div>
    </Col>
  );
};
