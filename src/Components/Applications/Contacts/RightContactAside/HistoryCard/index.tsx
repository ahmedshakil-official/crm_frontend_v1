import { HistoryCardProps } from "@/Types/ContactType";
import React from "react";
import { ModalHeader } from "reactstrap";

export const HistoryCard: React.FC<HistoryCardProps> = ({ historyToggle, showHistory }) => {
  return (
    <div className={showHistory ? "show" : ""} id="right-history">
      <ModalHeader className="p-20 w-100" toggle={historyToggle}>
        {"Contact History"}
      </ModalHeader>
      <div className="history-details">
        <div className="text-center d-flex align-items-center gap-2">
          <i className="fa-solid fa-pencil"></i>
          <p>{"Contact has not been modified yet."}</p>
        </div>
        <div className="d-flex gap-2">
          <i className="fa-solid fa-star me-3"></i>
          <div className="flex-grow-1 mt-0">
            <h6 className="mt-0">{"Contact Created"}</h6>
            <p className="mb-0">{"Contact is created via mail"}</p>
            <span className="f-12">{"Sep 10, 2024 4:00"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
