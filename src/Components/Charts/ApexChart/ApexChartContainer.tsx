import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Container, Row } from "reactstrap";
import { BasicAreaChart } from "./BasicAreaChart";
import { AreaSpalineChart } from "./AreaSpalineChart";
import { BarChart } from "./BarChart";
import { ColumnChart } from "./ColumnChart";
import { BubbleChart } from "./BubbleChart";
import { SteplineChart } from "./SteplineChart";
import { LineChart } from "./LineChart";
import { PieChart } from "./PieChart";
import { DonutChart } from "./DonutChart";
import { MixedChart } from "./MixedChart";
import { CandlestickChart } from "./CandlestickChart";
import { RadarChart } from "./RadarChart";
import { RadialBarChart } from "./RadialBarChart";
import { ApexChartTitle, ChartsTitle } from "@/Constant";

const ApexChartContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ApexChartTitle} parent={ChartsTitle}/>
      <Container fluid>
        <Row>
          <RadarChart />
          <RadialBarChart />
          <CandlestickChart />
          <BasicAreaChart />
          <AreaSpalineChart />
          <BarChart />
          <ColumnChart />
          <BubbleChart />
          <SteplineChart />
          <LineChart />
          <PieChart />
          <DonutChart />
          <MixedChart />
        </Row>
      </Container>
    </>
  );
};
export default ApexChartContainer;
