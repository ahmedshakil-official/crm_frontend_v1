import { SocialNavData } from "@/Data/Applications/SocialApp";
import { SocialAppCallBackType } from "@/Types/SocialAppType";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const NavBarMain :React.FC<SocialAppCallBackType> = ({ callback }) => {
  const [activeTab, setActiveTab] = useState(1);
  const tabHandler = ( id : number) => {
    setActiveTab(id);
    callback(id);
  };

  return (
    <Nav tabs className="border-tab tabs-scoial">
      {SocialNavData.map((data, index) => (
        <Fragment key={index}>
          {data.userProfile ? (
            <NavItem>
              <div className="user-designation" />
              <div className="title">
                <Link href={`/app/social_app`}>ElANA</Link>
              </div>
              <div className="desc mt-2">general manager</div>
            </NavItem>
          ) : (
            <NavItem className="nav">
              <NavLink className={activeTab === data.id ? "active" : ""} onClick={() => tabHandler(data.id)}>
                {data.tittle}
              </NavLink>
            </NavItem>
          )}
        </Fragment>
      ))}
    </Nav>
  );
};

export default NavBarMain;
