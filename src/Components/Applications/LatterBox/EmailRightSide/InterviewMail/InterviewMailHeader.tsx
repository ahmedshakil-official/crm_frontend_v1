import SvgIcon from "@/CommonComponent/SVG/IconSvg";
import { InterviewMail } from "@/Constant";
import { MailHeader } from "@/Data/Applications/LetterBox/LetterBoxData";
import { useAppDispatch } from "@/Redux/Hooks";
import { handleInterview } from "@/Redux/Reducers/LetterBoxSlice";
import { Fragment, useState } from "react";
import { Tooltip } from "reactstrap";

const InterviewMailHeader = () => {
  const dispatch = useAppDispatch();
  const [tooltipOpen, setTooltipOpen] = useState<number | null>(null);
  const toggle = (index: number) => {
      setTooltipOpen(tooltipOpen !== index ? index : null);
  };
  return (
    <div className="mail-header-wrapper header-wrapper1">
      <div className="mail-header1">
        <div className="light-square" onClick={() => dispatch(handleInterview(false))}>
          <SvgIcon className="btn-email" iconId="back-arrow" />
        </div>
        <span>{InterviewMail}</span>
      </div>
      <div className="mail-body1">
        {MailHeader.map((data, i) => (
          <Fragment key={i}>
            <div className="light-square" id={`light-${data.icon}`}>
              <SvgIcon iconId={data.icon} className={data.className ? data.className : ""} />
            </div>
            <Tooltip placement="top" isOpen={tooltipOpen === i} target={`light-${data.icon}`} toggle={() => toggle(i)}>{data.tooltip}</Tooltip>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default InterviewMailHeader;
