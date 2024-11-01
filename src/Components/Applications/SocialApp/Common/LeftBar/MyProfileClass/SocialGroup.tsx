import { ImagePath } from "@/Constant";
import { SocialGroupData } from "@/Data/Applications/SocialApp";
import Image from "next/image";
import { UncontrolledTooltip } from "reactstrap";

const SocialGroup = () => {
  return (
    <ul className="justify-content-center">
      {SocialGroupData.map((data, index) => (
        <li className="d-inline-block" key={index}>
          <Image width={40} height={40} className="img-40 rounded-circle" src={`${ImagePath}/user/${data.imageName}`} alt="Img" id={`UncontrolledTooltipExample-${index}`}/>
          <UncontrolledTooltip placement="top" target={`UncontrolledTooltipExample-${index}`}>
            {data.userName}
          </UncontrolledTooltip>
        </li>
      ))}
    </ul>
  );
};

export default SocialGroup;
