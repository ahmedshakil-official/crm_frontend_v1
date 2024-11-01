import { ImagePath } from "@/Constant";
import { Card, CardBody, Col } from "reactstrap";
import CommentsBox from "./CommentsBox";
import LikeContent from "./LikeContent";
import NewUsersSocial from "./NewUsersSocial";
import SocialChat from "./SocialChat";
import Image from "next/image";

const NewUserClass = () => {
  return (
    <Col sm="12">
      <Card>
        <CardBody>
          <NewUsersSocial />
          <Image width={752} height={472} className="img-fluid" alt="timeline" src={`${ImagePath}/social-app/timeline-1.png`} />
          <div className="timeline-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. Fusce placerat enim et odio molestie sagittis.</p>
            <LikeContent />
            <SocialChat />
            <CommentsBox />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NewUserClass;
