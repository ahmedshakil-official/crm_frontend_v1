import { ImagePath } from "@/Constant";
import { MutualFriendList } from "@/Data/Applications/SocialApp";
import { MyProfileClassCollapseProp } from "@/Types/SocialAppType";
import Image from "next/image";
import { CardBody, Collapse } from "reactstrap";

const MutualFriendsCollapse :React.FC<MyProfileClassCollapseProp> = ({ isFilter }) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="social-status filter-cards-view">
        {MutualFriendList.map((data, index) => (
          <div className="d-flex gap-3" key={index}>
            <Image width={50} height={50} className="img-50 rounded-circle m-r-15" src={`${ImagePath}/user/${data.imageName}`} alt="user"/>
            <div className={`social-status ${data.socialClass}`} />
            <div className="flex-grow-1">
              <span className="f-w-700 d-block">{data.title}</span>
              <span className="d-block">{data.email}</span>
            </div>
          </div>
        ))}
      </CardBody>
    </Collapse>
  );
};

export default MutualFriendsCollapse;
