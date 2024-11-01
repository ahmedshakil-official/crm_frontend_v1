"use client";
import { Container, Row } from "reactstrap";
import DefaultCalendar from "./DefaultCalendar";
import BootstrapCalendar from "./ReactstrapCalendar/ReactstrapCalendar";
import DatesPicker from "./DatesPicker/DatesPicker";
import TimePicker from "./TimePicker";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { DatePicker, FormWidgets } from "@/Constant";

const DatePickerContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={DatePicker} parent={FormWidgets} />
      <Container fluid>
        <Row>
          <DefaultCalendar />
          <BootstrapCalendar />
          <DatesPicker />
          <TimePicker />
        </Row>
      </Container>
    </>
  );
};

export default DatePickerContainer;
