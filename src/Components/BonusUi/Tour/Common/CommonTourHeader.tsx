import { ImagePath, WilliamJennings } from "@/Constant";
import { CommonTourHeaderProp } from "@/Types/BonusUiType";
import Image from "next/image";
import { Col, Media } from "reactstrap";

const CommonTourHeader:React.FC<CommonTourHeaderProp> = ({ date, time }) => {
  return (
    <Col sm="8">
      <Media className="d-flex">
        <Image width={50} height={50} className="img-thumbnail rounded-circle me-3" src={`${ImagePath}/user/7.jpg`} alt="Generic placeholder image" />
        <Media body className="align-self-center">
          <h5 className="mt-0 user-name">{WilliamJennings}</h5>
          <div className="tour-wrapper">
            <span>{date}</span>
            <i className="tour-dot fa-solid fa-circle"></i>
            <span className="text-danger">{time}</span>
          </div>
        </Media>
      </Media>
    </Col>
  );
};

export default CommonTourHeader;
