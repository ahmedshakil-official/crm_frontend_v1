import { Href, ImagePath, Print } from "@/Constant";
import { ContactDetailsProps } from "@/Types/ContactType";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { EmptyData } from "../../Common/EmptyData";
import { EditDeleteLink } from "./EditDeleteLink";
import { PrintModal } from "./PrintModal";

export const ContactDetails: React.FC<ContactDetailsProps> = ({ selectedUser, userEditCallback, historyToggle }) => {
  const [printModal, setPrintModal] = useState(false);
  const togglePrintModal = () => setPrintModal(!printModal);
  const toggleCallback = useCallback((toggle: boolean) => {
    setPrintModal(toggle);
  }, []);

  return (
    <div>
      {selectedUser ? (
        <div className="profile-mail">
          <div className="d-flex">
            <Image width={100} height={100} className="img-100 img-fluid m-r-20 rounded-circle update_img_0" priority src={`${ImagePath}/${selectedUser.avatar}`} alt="" />
            <div className="flex-grow-1 mt-0">
              <h5>
                <span className="first_name_0">{selectedUser.name} </span>
                <span className="last_name_0">{selectedUser.surname}</span>
              </h5>
              <p className="email_add_0">{selectedUser.email}</p>
              <ul>
                <EditDeleteLink userEditCallback={userEditCallback} selectedUser={selectedUser} />
                <li><a href={Href} onClick={() => historyToggle()}>{"History"}</a></li>
                <li><a href={Href} onClick={() => togglePrintModal()}>{Print}</a></li>
              </ul>
            </div>
          </div>
          <div className="email-general">
            <h5 className="mb-3 f-w-700">{"General"}</h5>
            <ul>
              <li>{"Name"} <span className="font-primary first_name_0">{selectedUser.name}</span></li>
              <li>{"Mobile No"}<span className="font-primary mobile_num_0">{selectedUser.mobile}</span></li>
              <li>{"Email Address"}<span className="font-primary email_add_0">{selectedUser.email}</span></li>
            </ul>
          </div>
        </div>
      ) : (
        <EmptyData />
      )}
      {selectedUser && <PrintModal toggleCallback={toggleCallback} printModal={printModal} selectedUser={selectedUser} />}
    </div>
  );
};
