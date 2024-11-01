import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { ChartJsChartTitle, ChartsTitle } from "@/Constant";
import { Container, Row } from "reactstrap";
import { BarChart } from "./BarChart";
import { DoughnutChart } from "./DoughnutChart";
import { LineChart } from "./LineChart";
import { LineGraph } from "./LineGraph";
import { PolarChart } from "./PolarChart";
import { RadarGraph } from "./RadarGraph";

const ChartJsChartContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ChartJsChartTitle} parent={ChartsTitle} />
      <Container fluid>
        <Row>
          <BarChart />
          <LineGraph />
          <RadarGraph />
          <LineChart />
          <DoughnutChart />
          <PolarChart />
        </Row>
      </Container>
    </>
  );
};
export default ChartJsChartContainer;
