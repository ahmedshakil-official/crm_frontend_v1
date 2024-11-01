import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant";
import { BlogDataList } from "@/Data/Miscellaneous/Blog/BlogData";
import { Card, Col } from "reactstrap";

const BlogWithoutDetails = () => {
  return (
    <>
      {BlogDataList.map((data, index) => (
        <Col md="6" xl="3" className="box-col-3" key={index}>
          <Card>
            <div className="blog-box blog-grid text-center">
              <RatioImage className="img-fluid top-radius-blog rounded-top-3" src={`${ImagePath}/blog/${data.src}`} alt="blog" />
              <div className="blog-details-main">
                <ul className="blog-social">
                  <li className="digits rounded-0">9 April 2024</li>
                  <li className="digits rounded-0">by: Admin</li>
                  <li className="digits rounded-0">0 Hits</li>
                </ul>
                <hr />
                <p className="blog-bottom-details mt-2">{data.text}</p>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default BlogWithoutDetails;
