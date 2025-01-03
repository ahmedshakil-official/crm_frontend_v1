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
} from "reactstrap";
import "../../Organization.css"; // Import external CSS for styling

const OrganizationBanner = () => {
  return (
    <Container fluid className="p-4">
      <Card className="shadow-lg position-relative">
        {/* Banner Image inside the Card */}
        <img
          className="rounded-top-5 w-100"
          src="https://randomuser.me/api/portraits/women/70.jpg"
          alt="Banner"
          style={{ height: "300px", objectFit: "cover" }}
        />

        {/* Profile Image Positioned Over Banner */}
        <div className="profile-container">
          <img
            src="https://randomuser.me/api/portraits/women/50.jpg"
            alt="Profile"
            className="profile-pic"
          />
          <div className="edit-icon">
            <Button>
              <i className="fa fa-pencil"></i>
            </Button>
          </div>
        </div>

        {/* Card Body with User Details */}
        <CardBody className="text-center mt-4">
          <CardTitle tag="h3">MARK JECNO</CardTitle>
          <CardText className="text-muted">
            <strong>Network: </strong> City
          </CardText>

          {/* Contact Details */}
          <Row className="mt-4">
            <Col md={4}>
              <p>
                <strong>Email:</strong> Marekjecno@yahoo.com
              </p>
            </Col>
            <Col md={4}>
              <p>
                <strong>License No:</strong> 12201224055525
              </p>
            </Col>
            <Col md={4}>
              <p>
                <strong>Phone:</strong> +91 123-456-7890
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <p>
                <strong>Location:</strong> 69 Near School Demo Home, India
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
            <Link href="">
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
    </Container>
  );
};

export default OrganizationBanner;
