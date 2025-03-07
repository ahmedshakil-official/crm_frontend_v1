import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap";
import { useGetIVAsQuery } from "@/Redux/Reducers/CaseDetails/AdverseDetails/AdverseDetailsApi";
import { useParams } from "next/navigation";

interface ViewIVAsModalProps {
  isOpen: boolean;
  toggle: () => void;
  adverseAlias: string;
}

interface IVAItem {
  date_registered: string | null;
  outstanding_balance: string | null;
  satisfied: boolean;
  date_satisfied: string | null;
}

const ViewIVAsModal: React.FC<ViewIVAsModalProps> = ({
  isOpen,
  toggle,
  adverseAlias,
}) => {
  const params = useParams();
  const { casealias } = params;
  const { data: ivasData, isLoading } = useGetIVAsQuery({
    case_alias: casealias,
    adverse_alias: adverseAlias,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="lg">
      <ModalHeader toggle={toggle}>
        <h2>View IVAs</h2>
      </ModalHeader>

      <ModalBody className="p-4">
        <Table responsive striped bordered>
          <thead>
            <tr>
              <th>Date Registered</th>
              <th>Outstanding Balance</th>
              <th>Satisfied</th>
              <th>Date Satisfied</th>
            </tr>
          </thead>
          <tbody>
            {ivasData && ivasData.length > 0 ? (
              ivasData.map((iva: IVAItem, index: number) => (
                <tr key={index}>
                  <td>{iva.date_registered || "N/A"}</td>
                  <td>
                    {iva.outstanding_balance
                      ? `£${parseFloat(iva.outstanding_balance).toLocaleString("en-GB", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}`
                      : "N/A"}
                  </td>
                  <td>{iva.satisfied ? "Yes" : "No"}</td>
                  <td>{iva.satisfied ? iva.date_satisfied || "N/A" : "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center">
                  No IVAs found
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

export default ViewIVAsModal;