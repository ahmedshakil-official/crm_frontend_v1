import { FaEdit, FaTrash } from "react-icons/fa";
import { Button, Modal, ModalBody, ModalHeader, Table } from "reactstrap";

export interface ViewPreviousAddressModalProps {
  isOpen: boolean;
  toggle: () => void;
  applicantAlias?: string;
}
const ViewPreviousAddressModal: React.FC<ViewPreviousAddressModalProps> = ({
  isOpen,
  toggle,
  applicantAlias,
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="xl">
      <ModalHeader toggle={toggle}>
        <h3 className="text-primary">View Previous Address</h3>
      </ModalHeader>
      <ModalBody>
        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>Postcode</th>
              <th>House Name/Number</th>
              <th>Address Line 1</th>
              <th>City</th>
              <th>County</th>
              <th>Country</th>
              <th>Effective From</th>
              <th>Effective To</th>
              <th>Time at Address</th>
              <th>Residential Status</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="small">
            <tr>
              <td>12345</td>
              <td>House 1</td>
              <td>Street 1</td>
              <td>City A</td>
              <td>County B</td>
              <td>Country C</td>
              <td>2023-01-01</td>
              <td>2024-01-01</td>
              <td>1 Year, 0 Months</td>
              <td>Owner</td>
              <td>Example notes</td>
              <td>
                <div className="d-flex gap-2">
                  <Button color="primary" size="sm">
                    <FaEdit />
                  </Button>
                  <Button color="danger" size="sm">
                    <FaTrash />
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </ModalBody>
    </Modal>
  );
};

export default ViewPreviousAddressModal;
