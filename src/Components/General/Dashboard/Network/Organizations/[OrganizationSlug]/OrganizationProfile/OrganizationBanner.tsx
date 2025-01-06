import { FetchSingleOrganizationProps } from "@/Types/Network/OrganizationsTypes";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
  Spinner,
} from "reactstrap";
import "../../Organization.css"; // Import external CSS for styling

const OrganizationBanner: React.FC<FetchSingleOrganizationProps> = ({
  organizationInfo,
  fetchsetOrganizationInfo,
  isLoading,
}) => {
  return (
    <Container fluid className="p-4">
      {isLoading ? (
        <Card
          className="d-flex justify-content-center align-items-center w-100"
          style={{ height: "500px" }}
        >
          <Spinner color="primary" />
        </Card>
      ) : (
        <Card className="shadow-lg position-relative">
          {/* Banner Image inside the Card */}
          <Image
            width={1595}
            height={300}
            className="rounded-top-4 w-100 object-fit-cover"
            src={
              organizationInfo?.profile_image ||
              "/assets/images/other-images/bg-profile.png"
            }
            alt="Banner"
          />
          {/* Profile Image Positioned Over Banner */}
          <div className="profile-container">
            <Image
              width={120}
              height={120}
              src={organizationInfo?.logo || "/assets/images/user/2.png"}
              alt="Profile"
              className="profile-pic object-fit-cover"
            />
            <div className="edit-icon">
              <Button>
                <i className="fa fa-pencil"></i>
              </Button>
            </div>
          </div>

          {/* Card Body with User Details */}
          <CardBody className="text-center mt-4">
            <CardTitle tag="h3">{organizationInfo?.name}</CardTitle>
            <CardText className="text-muted">
              <strong>Network: </strong>{" "}
              {organizationInfo?.network?.name || "Not Avaiable"}
            </CardText>

            {/* Contact Details */}
            <Row className="mt-4">
              <Col md={4}>
                <p>
                  <strong>Email:</strong>{" "}
                  {organizationInfo?.email || "Not Avaiable"}
                </p>
              </Col>
              <Col md={4}>
                <p>
                  <strong>License No:</strong>{" "}
                  {organizationInfo?.license_no || "Not Avaiable"}
                </p>
              </Col>
              <Col md={4}>
                <p>
                  <strong>Phone:</strong>{" "}
                  {organizationInfo?.primary_mobile || "Not Avaiable"}
                </p>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <p>
                  <strong>Location:</strong>{" "}
                  {organizationInfo?.location || "Not Avaiable"}
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
                <Button color="danger" className="mx-2">
                  <i className="fa-regular fa-envelope"></i>
                </Button>
              </Link>
              <Link href="">
                <Button color="info" className="mx-2">
                  <i className="fa-brands fa-twitter"></i>
                </Button>
              </Link>
              <Link href={`${organizationInfo?.website}`} target="_blank">
                <Button color="success" className="mx-2">
                  <i className="fa-solid fa-earth-americas"></i>
                </Button>
              </Link>
              <Link href="">
                <Button color="dark" className="mx-2">
                  <i className="fa-brands fa-instagram"></i>
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
    </Container>
  );
};

export default OrganizationBanner;
