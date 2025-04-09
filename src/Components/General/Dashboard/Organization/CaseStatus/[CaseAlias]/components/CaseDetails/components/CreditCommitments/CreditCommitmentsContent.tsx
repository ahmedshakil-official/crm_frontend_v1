import { useGetCreditCommitmentsDetailsQuery } from "@/Redux/Reducers/CaseDetails/CreditCommitmentsDetails/CreditCommitmentsDetailsApi";
import LoadingSpinner from "@/app/loading";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Table,
} from "reactstrap";
import AddCreditCommitmentModal from "./CreditCommitmentsModals/AddCreditCommitmentModal";

const CreditCommitmentsContent: React.FC = () => {
  const { casealias } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  // rtk hooks
  const { data: creditCommitments, isLoading } =
    useGetCreditCommitmentsDetailsQuery({ case_alias: casealias });
  // rtk hooks end

  if (isLoading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  console.log(creditCommitments);

  if (creditCommitments?.data?.length === 0) return <div>No data found</div>;

  return (
    <Container>
      <Row>
        <Col lg="4" md="12">
          <Card className="ecommerce-widget rounded-4">
            <CardBody className="support-ticket-font pt-2  border-3 rounded-4 border-b-primary">
              <CardHeader className="pt-0 pb-1 m-0 text-center">
                <h4 className="fw-bold fs-6">Total Balance</h4>
              </CardHeader>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="text-primary h1">
                  <i className="fa-solid fa-sterling-sign"></i>
                </span>
                <span className="h2 text-primary font-weight-bold">£0.00</span>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="12">
          <Card className="ecommerce-widget rounded-4">
            <CardBody className="support-ticket-font pt-2  border-3 rounded-4 border-b-secondary">
              <CardHeader className="pt-0 pb-1 m-0 text-center">
                <h4 className="fw-bold fs-6">Total Balance To Be Repaid</h4>
              </CardHeader>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="text-secondary h1">
                  <i className="fa-solid fa-sterling-sign"></i>
                </span>
                <span className="h2 text-secondary font-weight-bold">
                  £0.00
                </span>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="12">
          <Card className="ecommerce-widget rounded-4">
            <CardBody className="support-ticket-font pt-2  border-3 rounded-4 border-b-success">
              <CardHeader className="pt-0 pb-1 m-0 text-center">
                <h4 className="fw-bold fs-6">Total Balance To Remain</h4>
              </CardHeader>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="text-success h1">
                  <i className="fa-solid fa-sterling-sign"></i>
                </span>
                <span className="h2 text-success font-weight-bold">£0.00</span>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* 2nd row  */}
      <Row>
        <Col lg="4" md="12">
          <Card className="ecommerce-widget rounded-4">
            <CardBody className="support-ticket-font pt-2  border-3 rounded-4 border-b-primary">
              <CardHeader className="pt-0 pb-1 m-0 text-center">
                <h4 className="fw-bold fs-6">Total Balance</h4>
              </CardHeader>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="text-primary h1">
                  <i className="fa-solid fa-calendar-days"></i>
                </span>
                <span className="h2 text-primary font-weight-bold">£0.00</span>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="12">
          <Card className="ecommerce-widget rounded-4">
            <CardBody className="support-ticket-font pt-2  border-3 rounded-4 border-b-secondary">
              <CardHeader className="pt-0 pb-1 m-0 text-center">
                <h4 className="fw-bold fs-6">Total Balance To Be Repaid</h4>
              </CardHeader>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="text-secondary h1">
                  <i className="fa-solid fa-calendar-days"></i>
                </span>
                <span className="h2 text-secondary font-weight-bold">
                  £0.00
                </span>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="12">
          <Card className="ecommerce-widget rounded-4">
            <CardBody className="support-ticket-font pt-2  border-3 rounded-4 border-b-success">
              <CardHeader className="pt-0 pb-1 m-0 text-center">
                <h4 className="fw-bold fs-6">Total Balance To Remain</h4>
              </CardHeader>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="text-success h1">
                  <i className="fa-solid fa-calendar-days"></i>
                </span>
                <span className="h2 text-success font-weight-bold">£0.00</span>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* 3r row  */}
      <Row>
        <Col lg="4" md="12">
          <Card className="ecommerce-widget rounded-4">
            <CardBody className="support-ticket-font pt-2  border-3 rounded-4 border-b-primary">
              <CardHeader className="pt-0 pb-1 m-0 text-center">
                <h4 className="fw-bold fs-6">Total Settlement Balance</h4>
              </CardHeader>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="text-primary h1">
                  <i className="fa-solid fa-sterling-sign"></i>
                </span>
                <span className="h2 text-primary font-weight-bold">£0.00</span>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* Cards Rows end  */}
      <Row>
        <Col className="d-flex justify-content-between">
          <Button
            color="secondary"
            type="submit"
            className="d-flex justify-content-center align-items-center gap-1"
          >
            <span>View Summary</span>
            <i className="fa-solid fa-eye"></i>
          </Button>
          <Button
            color="primary"
            type="submit"
            className="d-flex justify-content-center align-items-center gap-1"
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            <span>Add Credit Item</span>
            <i className="fa-solid fa-circle-plus"></i>
          </Button>
        </Col>
      </Row>
      {/* Table start  */}
      <Row className="mt-4">
        <Col>
          {/* <div className="table-responsive"> */}
          <Table responsive bordered hover>
            <thead>
              <tr>
                <th>Actions</th>
                <th>Applicant</th>
                <th>Joint</th>
                <th>Type</th>
                <th>Company</th>
                <th>Account No.</th>
                <th>OS Balance (£)</th>
                <th>Settlement Balance (£)</th>
                <th>Monthly Repayment (£)</th>
                <th>Interest Rate (%)</th>
                <th>Card Limit (£)</th>
                <th>Term Remaining (Months)</th>
                <th>Balloon Payment (£)</th>
                <th>Court Ordered</th>
                <th>Cost of Credit (£)</th>
                <th>Paid on Completion</th>
                <th>Source</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {creditCommitments?.map((item: any, index: number) => (
                <tr key={index}>
                  <td>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-primary">
                        <i className="fa fa-edit"></i>
                      </button>
                      <button className="btn btn-sm btn-danger">
                        <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  </td>
                  <td>
                    {`${item.applicant_details?.first_name || ""} ${
                      item.applicant_details?.last_name || ""
                    }` || "-"}
                  </td>
                  <td>
                    {item.joint?.charAt(0).toUpperCase() +
                      item.joint?.slice(1).toLowerCase() || "-"}
                  </td>
                  <td>
                    {item.type
                      ?.split("_")
                      .map(
                        (word: any) =>
                          word.charAt(0).toUpperCase() +
                          word.slice(1).toLowerCase()
                      )
                      .join(" ") || "-"}
                  </td>
                  <td>{item.company || "-"}</td>
                  <td>{item.account_no || "-"}</td>
                  <td>£{item.os_balance?.toFixed(2) || "0.00"}</td>
                  <td>£{item.settlement_balance?.toFixed(2) || "0.00"}</td>
                  <td>£{item.monthly_repayment?.toFixed(2) || "0.00"}</td>
                  <td>{item.interest_rate?.toFixed(2) || "0.00"}%</td>
                  <td>£{item.card_limit?.toFixed(2) || "0.00"}</td>
                  <td>{item.term_remaining || "0"}</td>
                  <td>£{item.balloon_payment?.toFixed(2) || "0.00"}</td>
                  <td>
                    {item.court_ordered?.charAt(0).toUpperCase() +
                      item.court_ordered?.slice(1).toLowerCase() || "-"}
                  </td>
                  <td>£{item.cost_of_credit?.toFixed(2) || "0.00"}</td>
                  <td>
                    {item.paid_on_completion.charAt(0).toUpperCase() +
                      item.paid_on_completion?.slice(1).toLowerCase() || "-"}
                  </td>
                  <td>{item.source || "-"}</td>
                  <td>
                    {item.has_the_unsecured_credit_mounted_up ||
                      "No note available"}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* </div> */}
        </Col>
      </Row>
      <AddCreditCommitmentModal
        isOpen={modalIsOpen}
        toggle={() => setModalIsOpen(!modalIsOpen)}
      />
    </Container>
  );
};

export default CreditCommitmentsContent;
