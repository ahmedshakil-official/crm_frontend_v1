import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap";
import { useGetCCJsQuery } from "@/Redux/Reducers/CaseDetails/AdverseDetails/AdverseDetailsApi";
import { useParams } from "next/navigation";

interface ViewCCJsModalProps {
  isOpen: boolean;
  toggle: () => void;
  adverseAlias: string;
}

interface CCJ {
  amount: string | null;
  loan_company_name: string;
  date_registered: string | null;
  has_satisfied: boolean;
  date_satisfied: string | null;
}

const ViewCCJsModal: React.FC<ViewCCJsModalProps> = ({
  isOpen,
  toggle,
  adverseAlias,
}) => {
  const params = useParams();
  const { casealias } = params;
  const { data: ccjs, isLoading } = useGetCCJsQuery({
    case_alias: casealias,
    adverse_alias: adverseAlias,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="lg">
      <ModalHeader toggle={toggle}>
        <h2>View CCJs</h2>
      </ModalHeader>

      <ModalBody className="p-4">
        <Table responsive striped bordered>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Company Name</th>
              <th>Date Registered</th>
              <th>Satisfied</th>
              <th>Date Satisfied</th>
            </tr>
          </thead>
          <tbody>
            {ccjs && ccjs.length > 0 ? (
              ccjs.map((ccj: CCJ, index: number) => (
                <tr key={index}>
                  <td>
                    {ccj.amount
                      ? `£${parseFloat(ccj.amount).toLocaleString("en-GB", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}`
                      : "N/A"}
                  </td>
                  <td>{ccj.loan_company_name || "N/A"}</td>
                  <td>{ccj.date_registered || "N/A"}</td>
                  <td>{ccj.has_satisfied ? "Yes" : "No"}</td>
                  <td>{ccj.has_satisfied ? ccj.date_satisfied || "N/A" : "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center">
                  No CCJs found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </ModalBody>

      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ViewCCJsModal;