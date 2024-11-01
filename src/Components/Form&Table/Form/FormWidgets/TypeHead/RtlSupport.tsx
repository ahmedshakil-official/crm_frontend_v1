import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { RTLSupport } from "@/Constant";
import { CountryDataList, RtlSupportData } from "@/Data/Form&Table/Form/FormWidgets";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";

const RtlSupport = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={RTLSupport} span={RtlSupportData} />
        <CardBody>
          <div id="scrollable-dropdown-menu">
            <Form className="theme-form">
              <div>
                <Typeahead align="right" options={CountryDataList} placeholder="Countries" id="RTL Support" />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RtlSupport;
