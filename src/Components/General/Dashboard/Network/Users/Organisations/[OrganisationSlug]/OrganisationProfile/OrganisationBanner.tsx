import { FetchSingleOrganisationProps } from "@/Types/Network/OrganisationsTypes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Row,
  Spinner,
} from "reactstrap";
import "../../Organisations.css"; // Import external CSS for styling
import UpdateOrganisationModal from "../Modals/UpdateOrganisationModal";

const OrganisationBanner: React.FC<FetchSingleOrganisationProps> = ({
  organisationInfo,
  isLoading,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleUpdateModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isLoading ? (
        <Card
          className="d-flex justify-content-center align-items-center w-100"
          style={{ height: "500px" }}
        >
          <Spinner color="primary" />
        </Card>
      ) : (
        <Card className="shadow-lg position-relative mt-0 mx-0 pt-0 px-0">
          {/* Card Body with User Details */}
          <CardBody className="text-center mt-0 mx-0 pt-0 px-0">
            {/* Banner Image inside the Card */}
            <div>
              <Image
                width={1595}
                height={300}
                className="rounded-top-4 w-100 object-fit-cover"
                src={
                  organisationInfo?.profile_image ||
                  "/assets/images/other-images/bg-profile.png"
                }
                alt="Banner"
              />
            </div>

            {/* Profile Image Positioned Over Banner */}
            <div className="profile-container">
              <Image
                width={120}
                height={120}
                src={
                  organisationInfo?.logo || "/assets/images/network/logo.jpg"
                }
                alt="Profile"
                className="profile-pic object-fit-cover"
              />
              <div className="edit_icon">
                <Button onClick={toggleUpdateModal}>
                  <i className="iconly-Edit icli"></i>
                </Button>
              </div>
            </div>
            <CardTitle tag="h3" className="mt-5 text-primary">
              {organisationInfo?.name}
            </CardTitle>
            <CardText className="text-success">
              <strong>Network: </strong>{" "}
              {organisationInfo?.network?.name || "Not Avaiable"}
            </CardText>

            {/* Contact Details */}
            <Row className="mt-4">
              <Col md={4}>
                <p>
                  <strong>Email:</strong>{" "}
                  {organisationInfo?.email ? (
                    <a
                      className="text-dark text_decoration_hover"
                      href={`mailto:${organisationInfo.email}`}
                    >
                      {organisationInfo.email}
                    </a>
                  ) : (
                    "Not Available"
                  )}
                </p>
              </Col>
              <Col md={4}>
                <p>
                  <strong>License No:</strong>{" "}
                  {organisationInfo?.license_no || "Not Avaiable"}
                </p>
              </Col>
              <Col md={4}>
                <p>
                  <strong>Phone:</strong>{" "}
                  {organisationInfo?.primary_mobile ? (
                    <a
                      className="text-dark text_decoration_hover"
                      href={`tel:${organisationInfo.primary_mobile}`}
                    >
                      {organisationInfo.primary_mobile}
                    </a>
                  ) : (
                    "Not Available"
                  )}
                </p>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <p>
                  <strong>Location:</strong>{" "}
                  {organisationInfo?.location || "Not Avaiable"}
                </p>
              </Col>
            </Row>

            {/* Social Media */}
            <div className="social-icons mt-3">
              <Link href="">
                <Button color="primary" className="mx-2">
                  <i className="fa-brands fa-facebook-f"></i>
                </Button>
              </Link>
              <Link href="">
                <Button color="dark" className="mx-2">
                  <i className="fa-brands fa-twitter"></i>
                </Button>
              </Link>
              <Link href={`${organisationInfo?.website}`} target="_blank">
                <Button color="success" className="mx-2">
                  <i className="fa-solid fa-earth-americas"></i>
                </Button>
              </Link>
            </div>

            {/* Follower Count */}
            <Row className="mt-4">
              <Col md={4}>
                <h5>4,656</h5>
                <p className="text-secondary">Cases</p>
              </Col>
              <Col md={4}>
                <h5>4,656</h5>
                <p className="text-secondary">Employees</p>
              </Col>
              <Col md={4}>
                <h5>118,779</h5>
                <p className="text-secondary">Clients</p>
              </Col>
            </Row>
          </CardBody>
        </Card>
      )}
      {/* update modal  */}
      <UpdateOrganisationModal
        isOpen={isModalOpen}
        toggle={toggleUpdateModal}
        slug={organisationInfo?.slug}
        organisationData={organisationInfo}
      />
    </>
  );
};

export default OrganisationBanner;
