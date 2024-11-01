import { Href, ImagePath } from "@/Constant";
import { FriendData } from "@/Data/Applications/SocialApp";
import { MyProfileClassCollapseProp } from "@/Types/SocialAppType";
import Image from "next/image";
import { CardBody, Collapse } from "reactstrap";
 
const ActivityFeedCollapse :React.FC<MyProfileClassCollapseProp> = ({ isFilter }) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="social-status filter-cards-view">
        {FriendData.map((data, index) => (
          <div className="d-flex gap-3" key={index}>
            <Image width={50} height={50} className="img-50 rounded-circle m-r-15" src={`${ImagePath}/user/${data.imageName}`} alt="user"/>
            <div className="flex-grow-1">
              <span className="f-w-700 d-block">{data.title}</span>
              <p>Commented on Shaun Park's <a href={Href}>Photo</a></p>
              <span className="light-span">{data.time} Ago</span>
            </div>
          </div>
        ))}
      </CardBody>
    </Collapse>
  );
};

export default ActivityFeedCollapse;
