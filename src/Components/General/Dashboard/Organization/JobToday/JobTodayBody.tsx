import SvgIcon from "@/CommonComponent/SVG/IconSvg";
import { ImagePath } from "@/Constant";
import {
  JobTodayBodyData,
  JobTodayData,
} from "@/Data/General/Dashboard/Default/DefaultData";
import Image from "next/image";
import { CardBody, Table } from "reactstrap";

export const JobTodayBody = () => {
  return (
    <CardBody className="pt-2">
      <ul className="d-flex align-center justify-content-center gap-3">
        {JobTodayData.slice(0,2).map((item, index) => (
          <li key={index}>
            <div className="d-flex gap-2">
              <div className={`flex-shrink-0 bg-light-${item.bgClass}`}>
                <SvgIcon className="stroke-icon" iconId={item.icon} />
              </div>
              <div className="flex-grow-1">
                <h3>{item.number}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="table-responsive theme-scrollbar">
        <Table className="display" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Job</th>
              <th>Company</th>
              <th className="text-center">Employee</th>
            </tr>
          </thead>
          <tbody>
            {JobTodayBodyData.map((item, index) => (
              <tr key={index}>
                <td>{item.time}</td>
                <td>{item.type}</td>
                <td>{item.company}</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <div className="flex-shrink-0">
                      <Image
                        width={28}
                        height={28}
                        src={`${ImagePath}/${item.image}`}
                        alt="JobTodayBody"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h6>{item.name}</h6>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </CardBody>
  );
};
