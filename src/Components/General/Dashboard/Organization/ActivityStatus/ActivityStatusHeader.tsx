import { ActivityStatus } from "@/Constant";
import { FaClock } from "react-icons/fa"; // Importing a clock icon
import { CardHeader } from "reactstrap";
import "./ActivityStatus.css";

const ActivityStatusHeader = () => {
  const today = new Date();
  const day = today.toLocaleString("en-UK", { weekday: "long" });
  const date = today.getDate();
  const month = today.toLocaleDateString("en-UK", { month: "short" });
  const year = today.getFullYear();

  return (
    <CardHeader className="pb-0 card-no-border">
      <div className="header-top text-center">
        <div className="icon-wrapper d-flex">
          <h3>{ActivityStatus}</h3>
          <FaClock className="fs-6 text-success rotate-animation" />
        </div>

        <div>
          <p>
            {day} {date},{" "}
            <span>
              {month} {year}
            </span>
          </p>
        </div>
      </div>
    </CardHeader>
  );
};

export default ActivityStatusHeader;
