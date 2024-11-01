import { OrderListTitle } from "@/Constant";
import { Col } from "reactstrap";

export const OrderList = () => {
  return (
    <Col md="6" xxl="4">
      <div className="card-wrapper border rounded-3 h-100 bg-light-secondary">
        <h6 className="sub-title f-w-600">{OrderListTitle}</h6>
        <ol className="mb-0">
          <li>{"Ui Kits"}</li>
          <li>{"Bonus Ui"}</li>
          <li>{"Animations"}</li>
          <li>
            <ol>
              <li>{"Typography"}</li>
              <li>{"Avatars"}</li>
              <li>{"Grid"}</li>
              <li>{"Tag & pills"}</li>
              <li>{"Alert"}</li>
            </ol>
          </li>
          <li>{"Dropdown"}</li>
          <li>{"Tabs"}</li>
          <li>{"Accordion"}</li>
        </ol>
      </div>
    </Col>
  );
};
