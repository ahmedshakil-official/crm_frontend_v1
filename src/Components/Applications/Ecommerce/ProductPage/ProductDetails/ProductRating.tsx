import { RateNow } from "@/Constant";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Col, Row } from "reactstrap";

export const ProductRating = () => {
  const [rating, setRating] = useState(3);
  const changeRating = (newRating: number) => {
    setRating(newRating);
  };
  return (
    <>
      <Row className="py-1">
        <Col md="4">
          <h6 className="f-w-600 product-title">{RateNow}</h6>
        </Col>
        <Col md="8">
          <div className="d-flex">
            <div className="rating">
              <Rating onClick={changeRating} initialValue={rating} size={17} />
            </div>
            <span className="ms-2">(250 review)</span>
          </div>
        </Col>
      </Row>
      <hr />
    </>
  );
};
