"use client"
import React from "react";
import { Container, Row } from "reactstrap";
import MyProfile from "./MyProfile/MyProfile";
import EditProfileForm from "./EditProfiles/EditProfileForm";
import AddProjectsAndUpload from "./AddProjectsAndUpload/AddProjectsAndUpload";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { EditProfile, Users } from "@/Constant";

const EditProfileContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={EditProfile} parent={Users} />
      <Container fluid>
        <div className="edit-profile">
          <Row>
            <MyProfile />
            <EditProfileForm />
            <AddProjectsAndUpload />
          </Row>
        </div>
      </Container>
    </>    
  );
};

export default EditProfileContainer;
