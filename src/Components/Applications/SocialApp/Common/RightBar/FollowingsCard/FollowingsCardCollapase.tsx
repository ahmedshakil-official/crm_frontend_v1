import { AddFriend, Href, ImagePath } from "@/Constant";
import { FollowingData } from "@/Data/Applications/SocialApp";
import { MyProfileClassCollapseProp } from "@/Types/SocialAppType";
import Image from "next/image";
import { CardBody, Collapse } from "reactstrap";

const FollowingsCardCollapse :React.FC<MyProfileClassCollapseProp> = ({ isFilter }) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="social-list filter-cards-view">
        {FollowingData.map((data, index) => (
          <div className="d-flex" key={index}>
            <Image width={50} height={50} className="img-50 img-fluid m-r-20 rounded-circle" alt="image" src={`${ImagePath}/user/${data.imageName}`}/>
            <div className="flex-grow-1">
              <span className="d-block">{data.name}</span>
              <a href={Href}>{AddFriend}</a>
            </div>
          </div>
        ))}
      </CardBody>
    </Collapse>
  );
};

export default FollowingsCardCollapse;
