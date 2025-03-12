import { useGetPortfolioDetailsQuery } from "@/Redux/Reducers/CaseDetails/Portfolio/PortfolioApi";
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
import AddPropertyModal from "./Modals/AddPropertyModal";
import PortfolioSummary from "./PortfolioSummary";

const PortfolioContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const prams = useParams();
  const { casealias } = prams;

  const { data, isLoading } = useGetPortfolioDetailsQuery({
    case_alias: casealias,
  });

  if (isLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <Container fluid className="p-4">
        <Row>
          <Card>
            <CardHeader className="bg-primary">
              <span className="fs-5">Summary of client declared values</span>
            </CardHeader>
            <CardBody>
              <PortfolioSummary data={data} />
            </CardBody>
          </Card>
        </Row>
        <hr />
        <Row className="mb-4">
          <Col md={12}>
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between mb-2">
                  <h5 className="mb-0 fs-3 text-primary">
                    Additional Properties
                  </h5>
                  <Button color="success" onClick={toggleModal}>
                    Add Portfolio
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                <div className="mt-3">
                  <div className="table-responsive">
                    <Table
                      className="table table-bordered table-hover"
                      style={{ fontSize: "0.9rem" }}
                    >
                      <thead className="table-light">
                        <tr>
                          <th
                            className="text-center"
                            style={{ width: "100px" }}
                          >
                            Actions
                          </th>
                          <th>Applicant/s</th>
                          <th>Full Address</th>
                          <th>Property Value</th>
                          <th>Monthly Rental</th>
                          <th>Lender</th>
                          <th>Balance</th>
                          <th>Value At Purchase</th>
                          <th>Date Purchased</th>
                          <th>Monthly Payment</th>
                          <th>Loan To Value</th>
                          <th>ICR</th>
                          <th>Is HMO</th>
                          <th>Is MUFB</th>
                          <th>EPC Rating</th>
                          <th>Repayment Type</th>
                          <th>To Be Repaid</th>
                          <th>Current Rate</th>
                          <th>Rate Type</th>
                          <th>Current Rate End Date</th>
                          <th>ERC End Date</th>
                          <th>Account Number</th>
                          <th>Ownership</th>
                          <th>Is Ltd Co</th>
                          <th>Remaining Mortgage Term</th>
                          <th>Bedrooms</th>
                          <th>Year Built</th>
                          <th>Leasehold</th>
                          <th>Property Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.map((item: any) => (
                          <tr key={item?.alias}>
                            <td>
                              <div className="text-center d-flex justify-content-center align-items-center">
                                <Button
                                  color="primary"
                                  size="sm"
                                  className="me-1"
                                  disabled
                                >
                                  <i className="fa-solid fa-pen-to-square"></i>
                                </Button>
                                <Button
                                  color="danger"
                                  size="sm"
                                  disabled
                                  onClick={() => alert("Clicked")}
                                >
                                  <i className="fa-solid fa-trash"></i>
                                </Button>
                              </div>
                            </td>
                            <td>
                              {item?.applicant
                                .map(
                                  (app: any) =>
                                    `${app?.first_name} ${app?.last_name}`
                                )
                                .join(", ")}
                            </td>
                            <td>{`${item?.house_name_or_number}, ${item?.address_1}, ${item?.city}, ${item?.postcode}`}</td>
                            <td>
                              £{Number(item?.property_value).toLocaleString()}
                            </td>
                            <td>
                              £
                              {Number(
                                item?.monthly_rental_income
                              ).toLocaleString()}
                            </td>
                            <td>{item?.mortgage_lender || "-"}</td>
                            <td>
                              £
                              {Number(
                                item?.current_mortgage_balance
                              ).toLocaleString()}
                            </td>
                            <td>
                              £
                              {Number(item?.value_at_purchase).toLocaleString()}
                            </td>
                            <td>
                              {new Date(
                                item?.date_purchased
                              ).toLocaleDateString()}
                            </td>
                            <td>
                              £
                              {Number(
                                item?.monthly_mortgage_payment
                              ).toLocaleString()}
                            </td>
                            <td>
                              {(
                                (Number(item?.current_mortgage_balance) /
                                  Number(item?.property_value)) *
                                100
                              ).toFixed(2)}
                              %
                            </td>
                            <td>
                              {(
                                Number(item?.monthly_rental_income) /
                                Number(item?.monthly_mortgage_payment)
                              ).toFixed(2)}
                            </td>
                            <td>{item?.is_hmo ? "Yes" : "No"}</td>
                            <td>{item?.is_mufb ? "Yes" : "No"}</td>
                            <td>{item?.epc_rating || "-"}</td>
                            <td>{item?.repayment_type || "-"}</td>
                            <td>{item?.to_be_repaid || "-"}</td>
                            <td>{item?.current_rate || "-"}</td>
                            <td>{item?.rate_type || "-"}</td>
                            <td>{item?.current_rate_end_date || "-"}</td>
                            <td>{item?.erc_end_date || "-"}</td>
                            <td>{item?.account_number || "-"}</td>
                            <td>{item?.ownership || "-"}</td>
                            <td>{item?.is_limited_company ? "Yes" : "No"}</td>
                            <td>{item?.remaining_mortgage_term || "-"}</td>
                            <td>{item?.number_of_bedrooms || "-"}</td>
                            <td>{item?.year_built || "-"}</td>
                            <td>{item?.leasehold || "-"}</td>
                            <td>{item?.property_type || "-"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <AddPropertyModal isOpen={isModalOpen} toggle={toggleModal} />
    </>
  );
};

export default PortfolioContent;
