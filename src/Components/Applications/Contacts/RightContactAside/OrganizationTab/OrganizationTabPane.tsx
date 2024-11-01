import { Href, ImagePath, Print } from "@/Constant";
import { OrganizationTabPaneProps } from "@/Types/ContactType";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { PrintModal } from "../PersonalTab/ContactDetails/PrintModal";

export const OrganizationTabPane: React.FC<OrganizationTabPaneProps> = ({ user }) => {
  const [printModal, setPrintModal] = useState(false);
  const togglePrintModal = () => setPrintModal(!printModal);
  const toggleCallback = useCallback((toggle: boolean) => {
    setPrintModal(toggle);
  }, []);
  return (
    <>
      <div className="profile-mail">
        <div className="d-flex">
          <Image width={100} height={100} className="img-100 img-fluid m-r-20 rounded-circle update_img_5" src={`${ImagePath}/${user.avatar}`} alt="" />
          <div className="flex-grow-1 mt-0">
            <h3>
              <span className="first_name_5">{user.name}</span>
            </h3>
            <p className="email_add_5">{user.email}</p>
            <ul>
              <li>
                <a href={Href} onClick={() => togglePrintModal()}>
                  {Print}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="email-general">
          <h3>{"General"}</h3>
          <p>
            {"Email Address"}: <span className="font-primary email_add_5">{user.email}</span>
          </p>
          <div className="gender">
            <h3>{"Personal"}</h3>
            <p>
              {"Gender"}: <span>{user.gender}</span>
            </p>
          </div>
        </div>
      </div>
      {user && <PrintModal toggleCallback={toggleCallback} printModal={printModal} selectedUser={user} />}
    </>
  );
};
