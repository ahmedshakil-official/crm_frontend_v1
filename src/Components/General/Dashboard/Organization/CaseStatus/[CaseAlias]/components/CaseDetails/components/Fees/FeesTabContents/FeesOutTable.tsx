import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Input,
  InputGroup,
  InputGroupText,
  Button,
} from "reactstrap";
import AddFeeOutModal from "./FeesModals/AddFeeOutModal";

const FeeOutTable = () => {
  const [fees, setFees] = useState([
    {
      id: "",
      index: 0,
      isDeleted: false,
      feeInFeeOutId: "",
      caseType: "",
      propertyName: "List_Fees_Out",
      paymentLink: "",
      fee: "",
      feeType: "",
      method: "",
      notes: "",
      feeDate: "",
    },
  ]);

  const feeTypes = ["Unknown", "Commission (Proc Fee Share)"];

  const methods = [
    "Credit / Debit Card",
    "Bacs",
    "Cheque",
    "Cash",
    "Online",
    "Other",
  ];

  const addNewFee = () => {
    const newFee = {
      id: "",
      index: fees.length,
      isDeleted: false,
      feeInFeeOutId: "",
      caseType: "",
      propertyName: "List_Fees_Out",
      paymentLink: "",
      fee: "",
      feeType: "",
      method: "",
      notes: "",
      feeDate: "",
    };
    setFees([...fees, newFee]);
  };

  const removeFee = (index: number) => {
    setFees(
      fees.map((fee, i) => (i === index ? { ...fee, isDeleted: true } : fee))
    );
  };

  const handleInputChange = (index: number, field: string, value: string) => {
    setFees(
      fees.map((fee, i) => (i === index ? { ...fee, [field]: value } : fee))
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleAddFee = (newFee: any) => {
    setFees([...fees, { ...newFee, index: fees.length }]);
    toggleModal();
  };

  return (
    <Container fluid className="panel-body">
      <Row className="mb-3">
        <Col sm={12} className="d-flex justify-content-end align-items-center">
          <Button
            color="primary"
            className="addFee d-flex align-items-center gap-2"
            onClick={toggleModal}
          >
            <i className="fa fa-plus"></i>
            Add New Fee Out
          </Button>
        </Col>
      </Row>

      <AddFeeOutModal
        isOpen={isModalOpen}
        toggle={toggleModal}
        onSubmit={handleAddFee}
        feeTypes={feeTypes}
        methods={methods}
      />
      <Row>
        <Col sm={12} className="form-group" id="FeeOut">
          <div className="table-responsive shadow-sm rounded">
            <Table hover bordered className="mb-0" id="FeeOutTable">
              <thead className="bg-light">
                <tr>
                  <th className="text-center" style={{ width: "5%" }}>
                    #
                  </th>
                  <th className="text-center" style={{ width: "20%" }}>
                    Amount
                  </th>
                  <th className="text-center" style={{ width: "15%" }}>
                    Fee Type
                  </th>
                  <th className="text-center" style={{ width: "15%" }}>
                    Method
                  </th>
                  <th className="text-center" style={{ width: "25%" }}>
                    Notes
                  </th>
                  <th className="text-center" style={{ width: "15%" }}>
                    Date Paid Out
                  </th>
                  <th className="text-center" style={{ width: "5%" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody id="FeeOutTableBody">
                {fees.map(
                  (fee, index) =>
                    !fee.isDeleted && (
                      <tr key={index} className="feeTableRow feeRowOut">
                        <td className="text-center align-middle">
                          <span className="fw-bold">{index + 1}</span>
                          {/* Hidden inputs */}
                          <input
                            type="hidden"
                            name={`List_Fees_Out[${index}].Id`}
                            value={fee.id}
                          />
                          <input
                            type="hidden"
                            name={`List_Fees_Out[${index}].Index`}
                            value={fee.index}
                          />
                          <input
                            type="hidden"
                            name={`List_Fees_Out[${index}].IsDeleted`}
                            value={fee.isDeleted.toString()}
                          />
                          <input
                            type="hidden"
                            name={`List_Fees_Out[${index}].FeeInFeeOutId`}
                            value={fee.feeInFeeOutId}
                          />
                          <input
                            type="hidden"
                            name={`List_Fees_Out[${index}].CaseType`}
                            value={fee.caseType}
                          />
                          <input
                            type="hidden"
                            name={`List_Fees_Out[${index}].PropertyName`}
                            value={fee.propertyName}
                          />
                          <input
                            type="hidden"
                            name={`List_Fees_Out[${index}].PaymentLink`}
                            value={fee.paymentLink}
                          />
                        </td>
                        <td className="p-2">
                          <InputGroup>
                            <InputGroupText className="text-primary">
                              £
                            </InputGroupText>
                            <Input
                              type="text"
                              name={`List_Fees_Out[${index}].Fee`}
                              value={fee.fee}
                              onChange={(e) =>
                                handleInputChange(index, "fee", e.target.value)
                              }
                              className="numeric-decimal feevalueOut form-control-sm"
                              placeholder="0.00"
                            />
                          </InputGroup>
                        </td>
                        <td className="p-2">
                          <Input
                            type="select"
                            name={`List_Fees_Out[${index}].FeeType`}
                            value={fee.feeType}
                            onChange={(e) =>
                              handleInputChange(
                                index,
                                "feeType",
                                e.target.value
                              )
                            }
                            className="form-control-sm"
                          >
                            <option value="">Select Type</option>
                            {feeTypes.map((type) => (
                              <option
                                key={type}
                                value={type === "Unknown" ? "" : type}
                              >
                                {type}
                              </option>
                            ))}
                          </Input>
                        </td>
                        <td className="p-2">
                          <Input
                            type="select"
                            name={`List_Fees_Out[${index}].Method`}
                            value={fee.method}
                            onChange={(e) =>
                              handleInputChange(index, "method", e.target.value)
                            }
                            className="form-control-sm"
                          >
                            {methods.map((method) => (
                              <option key={method} value={method}>
                                {method}
                              </option>
                            ))}
                          </Input>
                        </td>
                        <td className="p-2">
                          <Input
                            type="text"
                            name={`List_Fees_Out[${index}].Notes`}
                            value={fee.notes}
                            onChange={(e) =>
                              handleInputChange(index, "notes", e.target.value)
                            }
                            className="form-control-sm"
                            placeholder="Add notes..."
                          />
                        </td>
                        <td className="p-2">
                          <Input
                            type="date"
                            name={`List_Fees_Out[${index}].FeeDate`}
                            value={fee.feeDate}
                            onChange={(e) =>
                              handleInputChange(
                                index,
                                "feeDate",
                                e.target.value
                              )
                            }
                            className="form-control-sm"
                          />
                        </td>
                        <td className="text-center p-2">
                          <Button
                            color="danger"
                            size="sm"
                            outline
                            className="removeFee"
                            onClick={() => removeFee(index)}
                          >
                            <i className="fa fa-trash"></i>
                          </Button>
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FeeOutTable;
