import { JointUserProps } from "@/Types/Organization/JointUserTypes";
import React from "react";

import { Button, Card, CardBody, CardHeader, Col, Table } from "reactstrap";

const JointUsers: React.FC<JointUserProps> = ({ jointUserInfo, isLoading }) => {
  return (
    <Col lg="6" sm="12" className="box-col-12">
      <Card>
        <CardHeader className="d-flex justify-content-between">
          <h3>Joint Users</h3>
          <Button color="primary">Add Joint User</Button>
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
                  {/* <th>User Type</th> */}
                  <th>Relationship</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {jointUserInfo.map((userInfo: any, index: any) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="flex-shrink-0 comman-round">
                          {userInfo?.joint_user_details?.profile_image ? (
                            <img
                              src={userInfo?.joint_user_details?.profile_image}
                              alt="User Image"
                              className="rounded-circle"
                              width={40}
                              height={40}
                            />
                          ) : (
                            <h3 className="bg-success rounded-circle p-2">
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
                    {/* <td className="f-w-600">
                      {userInfo.joint_user_details?.user_type}
                    </td> */}
                    <td>{userInfo?.relationship}</td>
                    <td className="text-center">
                      <div className="d-flex justify-content-center gap-2 align-items-center">
                        <Button color="success" size="sm" title="Update User">
                          <i className="icon-pencil-alt"></i>
                        </Button>
                        <Button color="danger" size="sm" title="Delete User">
                          <i className="icon-trash"></i>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JointUsers;
