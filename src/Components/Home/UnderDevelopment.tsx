import React from "react";
import { Container, Row, Col } from "reactstrap";

const UnderDevelopment = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <i
            style={{ fontSize: "100px", color: "gray" }}
            className="fa-solid fa-circle-exclamation"
          ></i>
          <h1 className="text-danger mt-3">Sorry!</h1>
          <h5 className="text-primary mt-2">
            This page is Under Development.
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default UnderDevelopment;
