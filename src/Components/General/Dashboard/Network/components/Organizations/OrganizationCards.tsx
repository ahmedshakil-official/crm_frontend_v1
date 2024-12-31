import SvgIcon from "@/CommonComponent/SVG/IconSvg";
import apiClient from "@/services/api-client";
import { OrganizationsProps } from "@/Types/Network/OrganizationsTypes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  Button,
  Card,
  CardBody,
  Col,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";
import AddOrganizationModal from "./Modals/AddOrganizationModal";

const OrganizationCards = () => {
  const [organizations, setOrganizations] = useState<OrganizationsProps[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Fetch organizations from the API
  const fetchOrganizations = async () => {
    setIsLoading(true);
    try {
      const response = await apiClient.get("/organization/list/", {
        params: { search: searchQuery },
      });
      setOrganizations(response.data || []);
    } catch (error) {
      console.error("Error fetching organizations:", error);
      setOrganizations([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch organizations when the search query changes
  useEffect(() => {
    fetchOrganizations();
  }, [searchQuery]);

  return (
    <Card>
      <Row className="flex justify-content-between py-4">
        <Col md="3">
          <h2>Organization</h2>
        </Col>
        <Col>
          <InputGroup>
            <Input
              type="text"
              placeholder="Search Organization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <InputGroupText className="bg-success rounded-start-0 border-start-0">
              <FaSearch />
            </InputGroupText>
          </InputGroup>
        </Col>
        <Col md="3" xs="12" className="text-md-end text-center mt-2 mt-md-0">
          <Button color="primary" onClick={toggleModal}>
            Add Organization
          </Button>
        </Col>
      </Row>
      <Row>
        {isLoading ? (
          <Row className="text-center">
            <p>Loading...</p>
          </Row>
        ) : organizations.length > 0 ? (
          organizations.map((item) => (
            <Col
              sm="6"
              xxl="3"
              lg="4"
              xl="4"
              className="col-ed-4 box-col-4"
              key={item.slug}
            >
              <Card className="text-center bg-light">
                <CardBody>
                  <div className="social-img-wrap">
                    <div className="social-img">
                      <img
                        width="68"
                        height="68"
                        className="img-fluid object-fit-cover"
                        src={item.logo || "https://via.placeholder.com/68"}
                        alt="Organization"
                      />
                    </div>
                    <div className="edit-icon">
                      <SvgIcon iconId="profile-check" />
                    </div>
                  </div>
                  <div className="social-details">
                    <h5 className="mb-1">
                      <Link href={`/app/social_app`}>{item.name}</Link>
                    </h5>
                    <span className="f-light">{item.email}</span>
                    <ul className="card-social">
                      <li>
                        <Link href={item?.website || "#"} target="_blank">
                          <i className="fa-solid fa-earth-americas"></i>
                        </Link>
                      </li>
                    </ul>
                    <ul className="social-follow">
                      <li>
                        <h5 className="mb-0 text-secondary">15</h5>
                        <span className="f-light">Cases</span>
                      </li>
                      <li>
                        <h5 className="mb-0 text-secondary">10</h5>
                        <span className="f-light">Employees</span>
                      </li>
                      <li>
                        <h5 className="mb-0 text-secondary">14</h5>
                        <span className="f-light">Clients</span>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))
        ) : (
          <Row className="text-center">
            <p>Organization not found!</p>
          </Row>
        )}
      </Row>
      {/* Add Organization Modal */}
      <AddOrganizationModal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        refreshOrganizations={fetchOrganizations}
      />
    </Card>
  );
};

export default OrganizationCards;
