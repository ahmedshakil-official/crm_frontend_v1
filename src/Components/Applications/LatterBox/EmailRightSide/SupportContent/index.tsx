import { SupportEmailData } from "@/Data/Applications/LetterBox/LetterBoxData";
import { TabPane } from "reactstrap";
import UserEmailContent from "./UserEmailContent";

const SupportContent = () => {
  return (
    <TabPane tabId="8">
      <div className="mail-body-wrapper">
        <ul>
          {SupportEmailData.map((data, i) => (
            <li className="inbox-data" key={i}>
              <UserEmailContent data={data} ids={i}/> 
            </li>
          ))}
        </ul>
      </div>
    </TabPane>
  );
};

export default SupportContent;
