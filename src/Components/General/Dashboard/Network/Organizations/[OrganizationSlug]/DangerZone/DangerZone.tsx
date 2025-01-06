import { FetchSingleOrganizationProps } from "@/Types/Network/OrganizationsTypes";
import { useState } from "react";
import { Button, Card, CardBody, CardHeader } from "reactstrap";
import DeleteOrganizationModal from "../Modals/DeleteOrganizationModal";

const DangerZone: React.FC<FetchSingleOrganizationProps> = ({
  organizationInfo,
  fetchsetOrganizationInfo,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Toggle modal state
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <Card className="shadow-lg">
        <CardHeader className="h3">Danger Zone</CardHeader>
        <CardBody className="border-danger p-3 mb-4">
          {/** Change Visibility Section **/}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h5 className="fw-bold">Change organization visibility</h5>
              <p className="mb-0 opacity-75">
                This organization is currently public.
              </p>
            </div>
            <Button color="danger" disabled>
              Change visibility
            </Button>
          </div>
          <hr />
          {/** Disable Organization Protection Rules Section **/}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h5 className="fw-bold">Disable organization protection rules</h5>
              <p className="mb-0 opacity-75">
                Disable organization protection rules enforcement and APIs.
              </p>
            </div>
            <Button color="danger" disabled>
              Disable organization protection rules
            </Button>
          </div>
          <hr />
          {/** Transfer Ownership Section **/}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h5 className="fw-bold">Transfer ownership</h5>
              <p className="mb-0 opacity-75">
                Transfer this organization to another user or an organization
                where you have the ability to create repositories.
              </p>
            </div>
            <Button color="danger" disabled>
              Transfer
            </Button>
          </div>
          <hr />
          {/** Archive Organization Section **/}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h5 className="fw-bold">Archive this organization</h5>
              <p className="mb-0 opacity-75">
                Mark this organization as archived and read-only.
              </p>
            </div>
            <Button color="danger" disabled>
              Archive this organization
            </Button>
          </div>
          <hr />
          {/** Delete organization Section **/}
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="fw-bold">Delete this organization</h5>
              <p className="mb-0 opacity-75">
                Once you delete a organization, there is no going back. Please
                be certain.
              </p>
            </div>
            <Button color="danger" onClick={toggleModal}>
              Delete this organization
            </Button>
          </div>
          {/* Delete modal  */}
          {organizationInfo?.slug && (
            <DeleteOrganizationModal
              isOpen={isModalOpen}
              toggle={toggleModal}
              slug={organizationInfo.slug}
              onDeleteSuccess={() => fetchsetOrganizationInfo(null)}
            />
          )}
        </CardBody>
      </Card>
    </>
  );
};

export default DangerZone;
