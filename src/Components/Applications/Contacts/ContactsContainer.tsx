"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { App, ContactsTitle } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchContacts } from "@/Redux/Reducers/ContactReducer";
import { useCallback, useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import { LeftContactAside } from "./LeftContactAside";
import { RightContactAside } from "./RightContactAside";

const ContactsContainer = () => {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState(1);
  const changeTab = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);
  return (
    <>
      <Breadcrumbs mainTitle={ContactsTitle} parent={App} />
      <Container fluid>
        <div className="email-wrap bookmark-wrap">
          <Row>
            <LeftContactAside activeTab={activeTab} setActiveTab={setActiveTab} changeTab={changeTab} />
            <RightContactAside activeTab={activeTab} />
          </Row>
        </div>
      </Container>
    </>
  );
};
export default ContactsContainer;
