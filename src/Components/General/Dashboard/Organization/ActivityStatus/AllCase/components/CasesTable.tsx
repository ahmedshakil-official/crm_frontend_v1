import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  InputGroup,
  InputGroupText,
  Row,
  Table,
} from "reactstrap";

const CaseTable = () => {
  return (
    <Card>
      {/* Card Header */}
      <CardHeader className="pb-0">
        <Row className="align-items-center">
          <Col md="3">
            <h3>All Cases</h3>
          </Col>
          <Col md="6">
            <InputGroup>
              <Input
                type="text"
                placeholder="Search..."
                className="pe-5 rounded z-1" // Adds space for the icon
              />
              <InputGroupText className="position-absolute z-2 fixed-end end-0 top-50 translate-middle-y bg-transparent border-0 pe-3">
                <i className="fa-solid fa-magnifying-glass  text-primary"></i>
              </InputGroupText>
            </InputGroup>
          </Col>
          <Col md="3" xs="12" className="text-md-end text-center mt-2 mt-md-0">
            <Button color="primary">Add New Case</Button>
          </Col>
        </Row>
        {/* Filter Options */}
        <Card className="pt-3 mt-4 bg-primary p-3 rounded-1">
          <Row className="justify-content-center text-center g-3">
            {/* All Employee Filter */}
            <Col xs="12" sm="6" md="4" lg="2">
              <Input type="select" id="employeeFilter" className="py-1">
                <option value="">All Employees</option>
                <option value="employee1">Employee 1</option>
                <option value="employee2">Employee 2</option>
                <option value="employee3">Employee 3</option>
              </Input>
            </Col>

            {/* Case Category Filter */}
            <Col xs="12" sm="6" md="4" lg="2">
              <Input type="select" id="caseCategory" className="py-1">
                <option value="">All Categories</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </Input>
            </Col>

            {/* Application Type Filter */}
            <Col xs="12" sm="6" md="4" lg="2">
              <Input type="select" id="applicationType" className="py-1">
                <option value="">All Types</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
              </Input>
            </Col>

            {/* Case Status Filter */}
            <Col xs="12" sm="6" md="4" lg="2">
              <Input type="select" id="caseStatus" className="py-1">
                <option value="">All Statuses</option>
                <option value="status1">Status 1</option>
                <option value="status2">Status 2</option>
                <option value="status3">Status 3</option>
              </Input>
            </Col>

            {/* Case Stage Filter */}
            <Col xs="12" sm="6" md="4" lg="2">
              <Input type="select" id="caseStage" className="py-1">
                <option value="">All Stages</option>
                <option value="stage1">Stage 1</option>
                <option value="stage2">Stage 2</option>
                <option value="stage3">Stage 3</option>
              </Input>
            </Col>

            {/* Show Removed Cases Button */}
            <Col xs="12" sm="6" md="4" lg="2">
              <Button className="btn btn-light text-black w-100">
                Removed Case
              </Button>
            </Col>
          </Row>
        </Card>
      </CardHeader>

      {/* Card Body */}
      <CardBody>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Case Name</th>
              <th>Create Time</th>
              <th>Created By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Example Case 1</td>
              <td>2024-12-01</td>
              <td>John Doe</td>
              <td>
                <Button size="sm" color="warning" className="me-2">
                  Edit
                </Button>
                <Button size="sm" color="danger">
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>Example Case 2</td>
              <td>2024-12-02</td>
              <td>Jane Smith</td>
              <td>
                <Button size="sm" color="warning" className="me-2">
                  Edit
                </Button>
                <Button size="sm" color="danger">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default CaseTable;
