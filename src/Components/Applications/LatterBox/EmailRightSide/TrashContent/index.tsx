import { TrashEmailData } from "@/Data/Applications/LetterBox/LetterBoxData";
import { TabPane } from "reactstrap";
import TrashEmailContent from "./TrashEmailContent";

const TrashContent = () => {
  return (
    <TabPane tabId="5">
      <div className="mail-body-wrapper">
        <ul>
          {TrashEmailData.map((data,i)=>(
            <li className="inbox-data" key={i}>
              <TrashEmailContent data={data} ids={i}/> 
            </li>
          ))}
        </ul>
      </div>
    </TabPane>
  );
};

export default TrashContent;
