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
                className="rounded-top-3 w-100 object-fit-cover"
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
            <CardText>
              <span className="text-muted">Network:</span>{" "}
              <strong>
                {organisationInfo?.network?.name ? (
                  organisationInfo?.network?.name
                ) : (
                  <strong className="text-muted">Not Available</strong>
                )}
              </strong>
            </CardText>

            {/* Contact Details */}
            <Row className="mt-4">
              <Col md={4}>
                <span className="text-muted">Email:</span>{" "}
                {organisationInfo?.email ? (
                  <strong>{organisationInfo.email}</strong>
                ) : (
                  <strong className="text-muted">Not Available</strong>
                )}
              </Col>
              <Col md={4}>
                <span className="text-muted">License No:</span>{" "}
                {organisationInfo?.license_no ? (
                  <strong>{organisationInfo?.license_no}</strong>
                ) : (
                  <strong className="text-muted">Not Available</strong>
                )}
              </Col>
              <Col md={4}>
                <span className="text-muted">Phone:</span>{" "}
                {organisationInfo?.primary_mobile ? (
                  <strong>
                    <a
                      className="text-dark text_decoration_hover"
                      href={`tel:${organisationInfo?.primary_mobile}`}
                    >
                      {organisationInfo?.primary_mobile}
                    </a>
                  </strong>
                ) : (
                  <strong className="text-muted">Not Available</strong>
                )}
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <span className="text-muted">Location:</span>{" "}
                {organisationInfo?.location ? (
                  <strong>{organisationInfo?.location}</strong>
                ) : (
                  <strong className="text-muted">Not Available</strong>
                )}
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
                <strong className="text-primary opacity-75">Cases</strong>
              </Col>
              <Col md={4}>
                <h5>4,656</h5>
                <strong className="text-primary opacity-75">Employees</strong>
              </Col>
              <Col md={4}>
                <h5>118,779</h5>
                <strong className="text-primary opacity-75">Clients</strong>
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
