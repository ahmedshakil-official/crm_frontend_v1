import { Designer, ImagePath } from "@/Constant";
import Image from "next/image";
import { Media, Row } from "reactstrap";

export const UserFormHead = () => {
  return (
    <Row className="mb-2">
      <div className="profile-title">
        <Media className="d-flex gap-3">
          <Image width={70} height={70} className="img-70 rounded-circle" alt="" src={`${ImagePath}/user/7.jpg`} />
          <Media body className="flex-grow-1">
            <h3 className="mb-1">MARK JECNO</h3>
            <p>{Designer}</p>
          </Media>
        </Media>
      </div>
    </Row>
  );
};