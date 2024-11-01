import { ImagePath } from "@/Constant";
import { MyProfileClassCollapseProp } from "@/Types/SocialAppType";
import Image from "next/image";
import { CardBody, Collapse } from "reactstrap";

const LatestPhotosCollapse :React.FC<MyProfileClassCollapseProp> = ({ isFilter }) => {
  const numbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="photos filter-cards-view">
        <ul className="text-center">
          {numbers.map((data, index) => (
            <li key={index}>
              <div className="latest-post">
                <Image width={70} height={70} className="img-fluid" alt="user" src={`${ImagePath}/social-app/post-${data}.png`}/>
              </div>
            </li>
          ))}
        </ul>
      </CardBody>
    </Collapse>
  );
};

export default LatestPhotosCollapse;
