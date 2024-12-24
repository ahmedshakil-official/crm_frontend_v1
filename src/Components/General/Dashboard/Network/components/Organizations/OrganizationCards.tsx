import SvgIcon from "@/CommonComponent/SVG/IconSvg";
import { Followers, Following, Posts } from "@/Constant";
import { SocialUserCardData } from "@/Data/Applications/SocialApp";
import Link from "next/link";
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

const OrganizationCards = () => {
  return (
    <Card>
      <Row className="flex justify-content-between py-4">
        <Col md="3">
          <h2>Organization</h2>
        </Col>
        <Col>
          <InputGroup>
            <Input type="text" placeholder="Search Organization..." />
            <InputGroupText className="bg-success rounded-start-0 border-start-0">
              <FaSearch />
            </InputGroupText>
          </InputGroup>
        </Col>
        <Col md="3" xs="12" className="text-md-end text-center mt-2 mt-md-0">
          <Button color="primary">Add Organization</Button>
        </Col>
      </Row>
      <Row>
        {SocialUserCardData.map((item) => (
          <Col
            sm="6"
            xxl="3"
            lg="4"
            xl="4"
            className="col-ed-4 box-col-4"
            key={item.id}
          >
            <Card className="text-center bg-light">
              <CardBody>
                <div className="social-img-wrap">
                  <div className="social-img">
                    <img
                      width="68"
                      height="68"
                      className="img-fluid"
                      src="https://media.fridaypulse.com/cms_images/504/FRIDAY_-Hero-Article-AUG-12-2020-scaled.jpg"
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
                      <Link href="" target="_blank">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="" target="_blank">
                        <i className="fa-brands fa-google-plus-g"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="" target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="" target="_blank">
                        <i className="fa-brands fa-whatsapp"></i>
                      </Link>
                    </li>
                  </ul>
                  <ul className="social-follow">
                    <li>
                      <h5 className="mb-0 text-secondary">{item.totalPost}</h5>
                      <span className="f-light">{Posts}</span>
                    </li>
                    <li>
                      <h5 className="mb-0 text-secondary">{item.follower}</h5>
                      <span className="f-light">{Followers}</span>
                    </li>
                    <li>
                      <h5 className="mb-0 text-secondary">{item.following}</h5>
                      <span className="f-light">{Following}</span>
                    </li>
                  </ul>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
};
export default OrganizationCards;
