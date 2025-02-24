import apiClient from "@/services/api-client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

interface ApplicantDependantsViewModalProps {
  isOpen?: boolean;
  toggle?: () => void;
  slNo?: number;
  name?: string;
  dateOfBirth?: string;
  applicantAlias?: any;
}

const ApplicantDependantsViewModal: React.FC<
  ApplicantDependantsViewModalProps
> = ({ isOpen, toggle, applicantAlias }) => {
  const [applicantDependantsData, setApplicantDependantsData] = useState<any[]>(
    []
  );
  const params = useParams();
  const { casealias } = params;

  // Fetch dependants data
  const fetchApplicantDependants = async () => {
    try {
      const response = await apiClient.get(
        `/cases/${casealias}/applicant/details/${applicantAlias}/dependants`
      );
      setApplicantDependantsData(response.data);
      console.log("Dependants Data:", response.data);
    } catch (error) {
      console.error("Error fetching dependants:", error);
    }
  };

  useEffect(() => {
    if (casealias && applicantAlias) {
      fetchApplicantDependants();
    }
  }, [casealias, applicantAlias]);

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      {/* Modal Header */}
      <ModalHeader toggle={toggle}>
        <h2>Applicant Dependants</h2>
      </ModalHeader>

      {/* Modal Body */}
      <ModalBody>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="text-primary">Serial No</th>
                <th className="text-primary">Name</th>
                <th className="text-primary">Date of Birth</th>
              </tr>
            </thead>
            <tbody>
              {applicantDependantsData.length > 0 ? (
                applicantDependantsData.map((dependant, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{dependant.name || "-"}</td>
                    <td>{dependant.date_of_birth || "-"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center">
                    No dependants found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </ModalBody>

      {/* Modal Footer */}
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ApplicantDependantsViewModal;
