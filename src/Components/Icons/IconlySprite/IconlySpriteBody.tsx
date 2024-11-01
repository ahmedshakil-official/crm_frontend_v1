import { IconlySpriteData } from "@/Data/Icons/IconlySprite";
import { IconsCommonProps4 } from "@/Types/IconsTypes";
import { Col } from "reactstrap";

const IconlySpriteBody: React.FC<IconsCommonProps4> = ({ parentCallback }) => {
  const getITag = (tag: string) => {
    parentCallback(tag);
  };
  return (
    <>
      {IconlySpriteData.map((icon, i) => (
        <Col xxl="2" lg="4" xs="12" md="6" className="icons-item" key={i} onClick={() => getITag(icon.title)}>
          <i className={icon.data}></i>
          <h5 className="mt-0 me-2">{icon.title}</h5>
        </Col>
      ))}
    </>
  );
};

export default IconlySpriteBody;
