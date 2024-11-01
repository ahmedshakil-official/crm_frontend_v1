import { ImagePath } from "@/Constant";
import { Card, Col } from "reactstrap";
import MarkJencoBlogDetails from "./MarkJencoBlogDetails";
import RatioImage from "@/CommonComponent/RatioImage";

const MarkJencoBlog = () => {
  return (
    <Col xl="6" className="set-col-12 box-col-12">
      <Card>
        <div className="blog-box blog-shadow">
          <RatioImage className="img-fluid" src={`${ImagePath}/blog/blog.jpg`} alt="blog image" />
          <MarkJencoBlogDetails />
        </div>
      </Card>
    </Col>
  );
};

export default MarkJencoBlog;
