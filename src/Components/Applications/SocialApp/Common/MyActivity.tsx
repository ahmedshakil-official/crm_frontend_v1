import { ActivityLogData } from "@/Data/Applications/SocialApp";
import { MyActivityProp } from "@/Types/SocialAppType";

const MyActivity :React.FC<MyActivityProp> = ({ heading }) => {
  return (
    <div className="my-activity">
      <h3 className="f-w-700 mb-3">{heading}</h3>
      {ActivityLogData.map((item) => (
        <p key={item.id}>
          <span>{item.icon}</span>
          {item.description}
        </p>
      ))}
    </div>
  );
};

export default MyActivity;
