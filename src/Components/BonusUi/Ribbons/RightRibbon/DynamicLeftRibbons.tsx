import { Col } from "reactstrap";
import { Fragment } from "react";
import { RightRibbonDataList } from "@/Data/BonusUi/Ribbons";
import { RibbonProp } from "@/Types/BonusUiType";

export const DynamicRightRibbons = () => {
  return (
    <>
      {RightRibbonDataList.map(({ className, ribbonClass, title, span, icon }: RibbonProp, index) => (
        <Col sm="6" xl="4" key={index}>
          <div className={`border border-1 height-equal h-100 ${className ? className : ""}`}>
            <div className={`ribbon ${ribbonClass}`}>
              {title && title}
              {icon && icon}
            </div>
            <p>
              {span.map(({ spanText, text }, index) => (
                <Fragment key={index}>
                  {text && text}
                  {spanText && <em className="text-danger">{spanText}</em>}
                </Fragment>
              ))}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};


