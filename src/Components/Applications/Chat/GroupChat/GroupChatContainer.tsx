'use client'
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Chats, GroupChat } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchChatApiData, fetchChatMemberApiData } from "@/Redux/Reducers/ChatSlice";
import { useEffect } from "react";
import { Container, Row } from "reactstrap";
import { LeftSideBar } from "../PrivateChat/LeftSideBar";
import UserGroupChat from "./UserGroupChat";

const GroupChatContainer = () => {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(fetchChatMemberApiData());
    dispatch(fetchChatApiData());
  }, []);

  return (
    <>
      <Breadcrumbs mainTitle={GroupChat} parent={Chats} />
      <Container fluid>
      <Row className="g-0">
        <LeftSideBar />
        <UserGroupChat />
      </Row>
      </Container>
    </>    
  );
};

export default GroupChatContainer;
