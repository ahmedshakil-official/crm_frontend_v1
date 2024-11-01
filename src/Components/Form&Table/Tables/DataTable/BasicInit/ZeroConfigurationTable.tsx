import { SearchTableButton, ZeroConfiguration } from "@/Constant";
import { ZeroConfigurationColumn, ZeroConfigurationData } from "@/Data/Form&Table/Table/DataTable/BasicInitData";
import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, CardHeader, Col, Input, Label } from "reactstrap";

export const ZeroConfigurationTable = () => {
  const [filterText, setFilterText] = useState("");

  const TableRecordSearch = ZeroConfigurationData.filter((item) => {
    return Object.values(item).some((value) => String(value).toLowerCase().includes(filterText.toLowerCase()));
  });

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="basic-1_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input onChange={(e) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Col sm="12">
      <Card>
        <CardHeader className="pb-0 card-no-border">
          <h3>{ZeroConfiguration}</h3>
          <span>
            DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function:<code className="f-10">$().DataTable();</code>.
          </span>
          <span>Searching, ordering, and paging goodness will be immediately added to the table, as shown in this example.</span>
        </CardHeader>
        <CardBody>
          <div className="table-responsive">
            <DataTable className="custom-scrollbar" columns={ZeroConfigurationColumn} data={TableRecordSearch} pagination subHeader subHeaderComponent={subHeaderComponentMemo} highlightOnHover striped persistTableHead />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
