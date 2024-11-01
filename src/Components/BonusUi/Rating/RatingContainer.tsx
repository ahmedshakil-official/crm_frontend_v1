"use client";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { BonusUi, RatingTitle } from "@/Constant";
import HalfStarRating from "./HalfStarRating";
import HeartRating from "./HeartRating";
import MovingRating from "./MovingRating";
import PillRating from "./PillRating";
import ReverseRating from "./ReverseRating";
import SimpleRatingBar from "./SimpleRatingBar";
import SquareRating from "./SquareRating";
import StarRating from "./StarRating";
import ThumbUpDown from "./ThumbUpDown";

const RatingContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={RatingTitle} parent={BonusUi} />
      <Container fluid>
        <Row>
          <SimpleRatingBar />
          <MovingRating />
          <SquareRating />
          <PillRating />
          <ReverseRating />
          <StarRating />
          <HalfStarRating />
          <ThumbUpDown />
          <HeartRating />
        </Row>
      </Container>
    </>
  );
};
export default RatingContainer;
