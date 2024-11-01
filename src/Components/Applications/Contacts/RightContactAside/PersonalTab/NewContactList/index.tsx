import { ImagePath } from "@/Constant";
import { NewContactListProps, UserCallbackUserType } from "@/Types/ContactType";
import Image from "next/image";
import React, { useState } from "react";
import { Col, Nav, NavLink } from "reactstrap";
import { EmptyData } from "../../Common/EmptyData";

export const NewContactList: React.FC<NewContactListProps> = ({ users, userCallback }) => {
  const [dynamicTab, setDynamicTab] = useState(0);
  const contactDetails = (user: UserCallbackUserType) => {
    userCallback({ id: user.id, name: user.name, surname: user.surname, email: user.email, avatar: user.avatar, age: user.age, mobile: user.mobile });
  };
  return (
    <Col xl={4} md={5} className="xl-50">
      <Nav className="flex-column" pills>
        {users.length > 0 ? (
          users.map((user, index) => (
            <NavLink
              className={dynamicTab === index ? "active" : ""}
              key={index}
              onClick={() => {
                contactDetails(user);
                setDynamicTab(index);
              }}
            >
              <div className="d-flex">
                <Image width={50} height={50} className="img-50 img-fluid m-r-20 rounded-circle update_img_0" src={`${ImagePath}/${user.avatar}`} alt="" />
                <div className="flex-grow-1">
                  <h5>
                    <span className="first_name_0">{user.name}</span>
                    <span className="last_name_0">{user.surname}</span>
                  </h5>
                  <p className="email_add_0">{user.email}</p>
                </div>
              </div>
            </NavLink>
          ))
        ) : (
          <EmptyData />
        )}
      </Nav>
    </Col>
  );
};
