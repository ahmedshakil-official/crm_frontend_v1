import { Href, ImagePath } from "@/Constant";
import { OrganizationList } from "@/Data/Applications/Contacts/Contacts";
import { NavOrganizationProps } from "@/Types/ContactType";
import Image from "next/image";
import { Col, Nav, NavLink } from "reactstrap";

export const NavOrganization: React.FC<NavOrganizationProps> = ({ orgActiveTab, setOrgActiveTab }) => {
  return (
    <Col xl={4} md={5} className="xl-50">
      <Nav className="flex-column" pills>
        {OrganizationList.map((item) => (
          <NavLink
            key={item.id}
            href={Href}
            className={orgActiveTab === item.id ? "active" : ""}
            onClick={() => {
              setOrgActiveTab(item.id);
            }}
          >
            <div className="d-flex">
              <Image width={50} height={50} className="img-50 img-fluid m-r-20 rounded-circle" src={`${ImagePath}/${item.avatar}`} alt="" />
              <div className="flex-grow-1">
                <h3>{item.name}</h3>
                <p>{item.email}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </Nav>
    </Col>
  );
};
