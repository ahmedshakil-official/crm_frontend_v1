import { useState, useEffect } from "react";
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
import AddFeeInModal from "./FeesModals/AddFeeInModal";
import { useGetFeesInDetailsQuery } from "@/Redux/Reducers/CaseDetails/Fees/FeesApi";
import { useParams } from "next/navigation";

const FeeInTable = () => {
  const { casealias } = useParams();
  const { data: feesInDetails, isLoading } = useGetFeesInDetailsQuery({
    case_alias: casealias,
  });


  useEffect(() => {
    if (feesInDetails?.length > 0) {
      const formattedFees = feesInDetails.map((fee: any, index: number) => ({
        id: fee.alias || "",
        index: index,
        isDeleted: false,
        feeInFeeOutId: fee.case?.alias || "",
        caseType: fee.case?.case_category || "",
        propertyName: "List_Fees_In",
        paymentLink: "",
        fee: fee.amount || "",
        feeType: fee.fee_in_type || "",
        method: fee.method || "",
        notes: fee.notes || "",
        feeDate: fee.date_received || "",
      }));
      setFees(formattedFees);
    }
  }, [feesInDetails]);

  const [fees, setFees] = useState([
    {
      id: "",
      index: 0,
      isDeleted: false,
      feeInFeeOutId: "",
      caseType: "",
      propertyName: "List_Fees_In",
      paymentLink: "",
      fee: "",
      feeType: "",
      method: "",
      notes: "",
      feeDate: "",
    },
  ]);

  const feeTypes = [
    { title: "Unknown", value: "UNKNOWN" },
    { title: "Broker/Commitment Fee", value: "BROKER_COMMITMENT_FEE" },
    { title: "Procuration Fee", value: "PROCURATION_FEE" },
    { title: "Mortgage OfferFee", value: "MORTGAGE_OFFER_FEE" },
    { title: "BrokerFee", value: "BROKER_FEE" },
    { title: "Other", value: "OTHER" },
  ];

  const methods = [
    { title: "Credit / Debit Card", value: "CREDIT_DEBIT_CARD" },
    { title: "Bacs", value: "BACS" },
    { title: "Cheque", value: "CHEQUE" },
    { title: "Cash", value: "CASH" },
    { title: "Online", value: "ONLINE" },
    { title: "Other", value: "OTHER" },
  ];

  const addNewFee = () => {
    const newFee = {
      id: "",
      index: fees.length,
      isDeleted: false,
      feeInFeeOutId: "",
      caseType: "",
      propertyName: "List_Fees_In",
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

  if (isLoading) return <div>Loading...</div>;
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
            Add New Fee In
          </Button>
        </Col>
      </Row>

      <AddFeeInModal
        isOpen={isModalOpen}
        toggle={toggleModal}
        onSubmit={handleAddFee}
        feeTypes={feeTypes}
        methods={methods}
        caseAlias={casealias}
      />
      <Row>
        <Col sm={12} className="form-group" id="FeeIn">
          <div className="table-responsive shadow-sm rounded">
            <Table hover bordered className="mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="text-center" style={{ width: "5%" }}>#</th>
                  <th className="text-center" style={{ width: "20%" }}>Amount</th>
                  <th className="text-center" style={{ width: "15%" }}>Fee Type</th>
                  <th className="text-center" style={{ width: "15%" }}>Method</th>
                  <th className="text-center" style={{ width: "25%" }}>Notes</th>
                  <th className="text-center" style={{ width: "15%" }}>Date Received</th>
                  <th className="text-center" style={{ width: "5%" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((fee, index) =>
                  !fee.isDeleted && (
                    <tr key={fee.id || index} className="feeTableRow feeRowIn">
                      <td className="text-center align-middle">
                        <span className="fw-bold">{index + 1}</span>
                      </td>
                      <td className="text-center align-middle">
                        £{fee.fee || '0.00'}
                      </td>
                      <td className="text-center align-middle">
                        {feeTypes.find(type => type.value === fee.feeType)?.title || '-'}
                      </td>
                      <td className="text-center align-middle">
                        {methods.find(method => method.value === fee.method)?.title || '-'}
                      </td>
                      <td className="text-center align-middle">
                        {fee.notes || '-'}
                      </td>
                      <td className="text-center align-middle">
                        {fee.feeDate || '-'}
                      </td>
                      <td className="text-center align-middle">
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

export default FeeInTable;
