import RatioImage from "@/CommonComponent/RatioImage";
import { CommonLogo } from "../Common/CommonLogo";
import { ImagePath } from "@/Constant";
import { stepperHorizontalData } from "@/Data/Pages/PagesData";
import { RegisterWizardProp } from "@/Types/PagesType";

export const RegisterWizardList: React.FC<RegisterWizardProp> = ({ level }) => {
  return (
    <li className="anchor">
      <li>
        <CommonLogo logoClass="text-start ps-0" />
      </li>
      {stepperHorizontalData.map((item) => (
        <li key={item.id}>
          <div className="progresscont">
            <div className="circleblocks">
              <div className="user-profile">
                <div className={item.divClass}>
                  <div className={`circulo text-center ${level === item.id ? "activecirculo" : level > item.id ? "activecirculo" : ""}`}>
                    <i className={`fas fa-${item.icon}`}></i>
                  </div>
                  <div className="user-content">
                    <h4 className="font-primary">{item.title}</h4>
                    <h6>{item.detail}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
      <li>
        <RatioImage className="img-fluid w-100" src={`${ImagePath}/login/icon.png`} alt="looginpage" />
      </li>
    </li>
  );
};
