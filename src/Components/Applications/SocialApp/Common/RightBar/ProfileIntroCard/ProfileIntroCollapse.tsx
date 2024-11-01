import { Button, CardBody, Collapse } from "reactstrap";
import { Fragment } from "react";
import { Dribble, Facebook, Twitter } from "@/Constant";
import { MyProfileClassCollapseProp } from "@/Types/SocialAppType";
import { ProfileIntroData } from "@/Data/Applications/SocialApp";
import Link from "next/link";

const ProfileIntroCollapse :React.FC<MyProfileClassCollapseProp> = ({ isFilter }) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="filter-cards-view">
        {ProfileIntroData.map((data, index) => (
          <Fragment key={index}>
            <span className="f-w-700">{data.title} :</span>
            <p>{data.paragraph}</p>
          </Fragment>
        ))}
        <div className="social-network theme-form">
          <span className="f-w-700">Social Networks</span>
          <Link href="https://www.facebook.com/" target="_blank"><Button color="transparent" className="social-btn btn-fb mb-2 text-center"><i className="fa-solid fa-reply" />{Facebook}</Button></Link>
          <Link href="https://www.twitter.com/" target="_blank"><Button color="transparent" className="social-btn btn-twitter mb-2 text-center"><i className="fa-brands fa-twitter" />{Twitter}</Button></Link>
          <Link href="https://dribbble.com/session/new" target="_blank"><Button color="transparent" className="social-btn btn-google text-center"><i className="fa-brands fa-dribbble" />{Dribble}</Button></Link>
        </div>
      </CardBody>
    </Collapse>
  );
};

export default ProfileIntroCollapse;
