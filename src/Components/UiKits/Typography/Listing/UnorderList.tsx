import { UnorderListTitle } from "@/Constant";
import { UnorderListData } from "@/Data/Uikits/Typography";
import { Col } from "reactstrap";

export default function UnorderList() {
  return (
    <Col md="6" xxl="4">
      <div className="card-wrapper border rounded-3 h-100 bg-light-primary">
        <h6 className="sub-title f-w-600">{UnorderListTitle}</h6>
        <ul>{UnorderListData && UnorderListData.map((item, index) => <li key={index}>{item}</li>)}</ul>
      </div>
    </Col>
  );
}
