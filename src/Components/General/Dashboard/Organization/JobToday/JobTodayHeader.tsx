import { JobTodayHeading } from "@/Constant";
import { CardHeader } from "reactstrap";

export const JobTodayHeader = () => {
  const today = new Date();
  const day = today.toLocaleString("en-US", { weekday: "long" });
  const date = today.getDate();
  const month = today.toLocaleString("en-US", { month: "short" });
  const year = today.getFullYear();

  return (
    <CardHeader className="pb-0 card-no-border">
      <div className="header-top">
        <h3>{JobTodayHeading}</h3>
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
