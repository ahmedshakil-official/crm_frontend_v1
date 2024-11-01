import { BalanceIconWrapData } from "@/Data/Uikits/Modal";
import { ArrowDownRight, ArrowUpRight } from "react-feather";
import { Badge } from "reactstrap";

export const BalanceItem = () => {
  return (
    <ul>
      {BalanceIconWrapData.map((item) => (
        <li key={item.id}>
          <div className={`balance-item`}>
            <div className={`balance-icon-wrap bg-light-${item.color}`}>
              <div className={`balance-icon bg-${item.color}`}>
                <div className="icon">{item.id === 1 ? <ArrowDownRight /> : <ArrowUpRight />}</div>
              </div>
            </div>
            <div>
              <span className="f-12 font-dark">{item.text} </span>
              <h4>
                {item.rate}
                {"K"}
              </h4>
              <Badge color={`light-${item.color}`} pill>
                {item.badge}
                {"%"}
              </Badge>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
