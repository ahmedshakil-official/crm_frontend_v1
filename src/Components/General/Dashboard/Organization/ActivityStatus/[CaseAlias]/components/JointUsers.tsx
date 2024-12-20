import { JointUserProps } from "@/Types/Organization/JointUserTypes";
import apiClient from "@/services/api-client"; // Import your API client
import { useParams } from "next/navigation";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Spinner,
  Table,
} from "reactstrap";
import AddJointUserModal from "../Modals/AddJointUserModal";
import JointUserDeleteModal from "../Modals/JointUserDeleteModal"; // Import the delete modal
import UpdateJointUserModal from "../Modals/UpdateJointUserModal";

const JointUsers: React.FC<JointUserProps> = ({
  jointUserInfo,
  fetchJointUserInfo,
  isLoading,
}) => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const params = useParams();
  const { casealias } = params;

  const toggleAddModal = () => setAddModalOpen(!addModalOpen);
  const toggleUpdateModal = () => setUpdateModalOpen(!updateModalOpen);
  const toggleDeleteModal = () => setDeleteModalOpen(!deleteModalOpen);

  const handleUpdateClick = (user: any) => {
    setSelectedUser(user);
    toggleUpdateModal();
  };

  const handleDeleteClick = (user: any) => {
    setSelectedUser(user);
    toggleDeleteModal();
  };

  const deleteUser = async () => {
    if (!selectedUser) return;
    setIsDeleting(true);
    try {
      await apiClient.delete(
        `/cases/${casealias}/joint/users/${selectedUser.alias}/`
      );
      toggleDeleteModal();
      fetchJointUserInfo(); // Refresh the joint user list
    } catch (error) {
      console.error("Error deleting joint user:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CardHeader className="d-flex justify-content-between">
          <h3>Joint Users</h3>
          <Button color="primary" onClick={toggleAddModal}>
            Add Joint User
          </Button>
        </CardHeader>
        <CardBody className="pt-0 recent-order">
          <div className="table-responsive theme-scrollbar">
            <Table
              className="display table-bordernone mt-0"
              id="recent-order"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>User Type</th>
                  <th>Relationship</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={6} className="text-center">
                      <Spinner color="primary" />
                    </td>
                  </tr>
                ) : jointUserInfo.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center">
                      <p>No joint users available</p>
                    </td>
                  </tr>
                ) : (
                  jointUserInfo.map((userInfo: any, index: number) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <div className="flex-shrink-0 comman-round">
                            {userInfo?.joint_user_details?.profile_image ? (
                              <img
                                src={
                                  userInfo?.joint_user_details?.profile_image
                                }
                                alt="User"
                                className="rounded-circle object-fit-cover"
                                width={40}
                                height={40}
                              />
                            ) : (
                              <h3
                                className="bg-success rounded-circle d-flex align-items-center justify-content-center text-white"
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  margin: 0,
                                }}
                              >
                                {userInfo?.joint_user_details?.first_name?.[0]?.toUpperCase() ||
                                  ""}
                                {userInfo?.joint_user_details?.last_name?.[0]?.toUpperCase() ||
                                  ""}
                              </h3>
                            )}
                          </div>
                          <div className="flex-grow-1">
                            <h6>
                              {userInfo.joint_user_details?.first_name}{" "}
                              {userInfo?.joint_user_details?.last_name}
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td className="f-w-600">
                        {userInfo.joint_user_details?.email}
                      </td>
                      <td className="font-primary f-w-600">
                        {userInfo.joint_user_details?.phone}
                      </td>
                      <td className="f-w-600">
                        {userInfo.joint_user_details?.user_type}
                      </td>
                      <td>{userInfo?.relationship}</td>
                      <td className="text-center">
                        <div className="d-flex justify-content-center gap-2 align-items-center">
                          <Button
                            color="success"
                            size="sm"
                            title="Update User"
                            onClick={() => handleUpdateClick(userInfo)}
                          >
                            <i className="icon-pencil-alt"></i>
                          </Button>
                          <Button
                            color="danger"
                            size="sm"
                            title="Delete User"
                            onClick={() => handleDeleteClick(userInfo)}
                          >
                            <i className="icon-trash"></i>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </div>
        </CardBody>
        <AddJointUserModal
          isOpen={addModalOpen}
          toggle={toggleAddModal}
          onSave={fetchJointUserInfo}
        />
        <UpdateJointUserModal
          isOpen={updateModalOpen}
          toggle={toggleUpdateModal}
          user={selectedUser}
          onSave={fetchJointUserInfo}
        />
        <JointUserDeleteModal
          isOpen={deleteModalOpen}
          toggle={toggleDeleteModal}
          onConfirm={deleteUser}
          isLoading={isDeleting}
          selectedUser={selectedUser}
        />
      </Card>
    </Col>
  );
};

export default JointUsers;
