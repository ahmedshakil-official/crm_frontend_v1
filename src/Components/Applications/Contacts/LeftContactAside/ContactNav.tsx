import { Href } from "@/Constant";
import { ContactNavData } from "@/Data/Applications/Contacts/Contacts";
import { LeftContactAsideProps } from "@/Types/ContactType";
import React from "react";
import { Nav, NavItem } from "reactstrap";
import { AddContact } from "./ContactModals/AddContact";
import { CategoryModal } from "./ContactModals/CategoryModal";

export const ContactNav: React.FC<LeftContactAsideProps> = ({ activeTab, setActiveTab, changeTab }) => {
  const tabClick = (id: number) => {
    setActiveTab(id);
    changeTab(id);
  };
  return (
    <Nav className="main-menu contact-options">
      <NavItem>
        <AddContact />
      </NavItem>
      <NavItem>
        <span className="main-title">{"Views"}</span>
      </NavItem>
      <NavItem>
        <a href={Href} className={activeTab === 1 ? "active" : ""} onClick={() => tabClick(1)}>
          <span className="title">{"Personal"}</span>
        </a>
      </NavItem>
      <NavItem>
        <CategoryModal />
      </NavItem>
      {ContactNavData.map((item) => (
        <NavItem key={item.id}>
          <a href={Href} className={activeTab === item.id ? "active" : ""} onClick={() => tabClick(item.id)}>
            <span className="title">{item.title}</span>
          </a>
        </NavItem>
      ))}
    </Nav>
  );
};
