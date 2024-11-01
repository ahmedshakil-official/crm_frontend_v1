import { ImagePath } from "@/Constant";
import { UserCommentPropsType } from "@/Types/MiscellaneousType";
import Image from "next/image";
import { Col, Media, Row } from "reactstrap";
import { ChildUserComment } from "../ChildUserComment";

const UserComment: React.FC<UserCommentPropsType> = ({ ImageSrc, userReplay, text }) => {

  return (
    <>
      <li>
        <ul className="mx-0">
          <li>
            <Media className="d-flex align-self-center">
              <Image width={74} height={74} className="align-self-center" src={`${ImagePath}/blog/${ImageSrc}`} alt="Generic placeholder" />
              <Media body>
                <Row>
                  <Col md="4" className="xl-100">
                    <h6 className="blog-title mt-0">Jolio Mark<span> ( Designer )</span></h6>
                  </Col>
                  <Col md="8" className="xl-100">
                    <ul className="comment-social float-start float-md-end learning-comment">
                      <li><i className="icofont icofont-thumbs-up"></i>02 Hits</li>
                      <li><i className="icofont icofont-ui-chat"></i>598 Comments</li>
                    </ul>
                  </Col>
                </Row>
                <p>{text}</p>
              </Media>
            </Media>
          </li>
        </ul>
      </li>
      {userReplay && <ChildUserComment/>}
    </>
  );
};

export default UserComment;
