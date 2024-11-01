import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { AdvanceInit, DataTables } from "@/Constant";
import { Container, Row } from "reactstrap";
import RowCreateCallback from "./RowCreateCallback";
import StockResult from "./StockResult";

const AdvanceInitContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={AdvanceInit} parent={DataTables}/>
      <Container fluid>
        <Row>
          <StockResult />
          <RowCreateCallback />
        </Row>
      </Container>
    </>
  );
};

export default AdvanceInitContainer;
