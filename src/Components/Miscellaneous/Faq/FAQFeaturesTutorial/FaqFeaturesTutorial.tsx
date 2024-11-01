import { ImagePath, ThemePrimary } from "@/Constant";
import { FeaturesData } from "@/Data/Miscellaneous/Faq/FaqData";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { Card, CardBody, CardFooter, Col } from "reactstrap";
import FaqProductHover from "./FaqProductHover";

const FaqFeaturesTutorial = () => {
  return (
    <>
      {FeaturesData.map((item, id) => (
        <Col xl="3" md="6" className="box-col-3" key={id}>
          <Card className="features-faq product-box">
            <div className="faq-image product-img">
              <Image width={384} height={288} alt="feature" className="img-fluid" src={`${ImagePath}/${item.img}`} />
              <FaqProductHover />
            </div>
            <CardBody>
              <h5 className="f-w-700 mb-1">{item.title}</h5>
              <p>{item.short_description}</p>
            </CardBody>
            <CardFooter className="d-flex align-items-center justify-content-between">
              <span className="f-w-600">{item.date}</span>
              <Rating fillColor={ThemePrimary} initialValue={Math.random() * 5} size={18} />
            </CardFooter>
          </Card>
        </Col>
      ))}
    </>
  );
};
export default FaqFeaturesTutorial;
