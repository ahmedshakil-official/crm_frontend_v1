import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { ScheduleHeading } from "@/Constant";
import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactDatePicker from "react-datepicker";

const Schedule = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const onChange = (date: [Date | null, Date | null]) => {
    const [start, end] = date;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <Col xxl="3" xl="5" sm="6" className="box-col-6">
      <Card className="overflow-hidden custom-react-datepicker">
        <DashboardCommonHeader title={ScheduleHeading} />
        <CardBody className="p-0"> 
          <ReactDatePicker selected={startDate} onChange={onChange} startDate={startDate} endDate={endDate} selectsRange inline />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Schedule;
