import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HtmlTableTittle, SearchTableButton } from "@/Constant";
import { HtmlColumn, HtmlColumnData, HtmlData } from "@/Data/Form&Table/Table/DataTable/DataSourceDataTables";
import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Input, Label } from "reactstrap";

const HtmlSourcedData = () => {
  const [filterText, setFilterText] = useState("");
  const filteredItems = HtmlColumnData.filter((item) =>item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="basic-1_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-1">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={HtmlTableTittle} span={HtmlData} headClass="pb-0 card-no-border" />
        <CardBody>
          <div className="table-responsive">
            <DataTable className="custom-scrollbar" data={filteredItems} columns={HtmlColumn} striped highlightOnHover pagination subHeader subHeaderComponent={subHeaderComponentMemo}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HtmlSourcedData;
