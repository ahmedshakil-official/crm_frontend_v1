import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { AreaChartTitle1, AreaChartTitle2, BarChart2Title, ChartsTitle, ColumnChartTitle1, ColumnChartTitle2, GoogleChartTitle, LineChartTitle, PieChart, WordTreeTitle } from "@/Constant";
import { GoogleChartData } from "@/Data/Charts/GoogleChart";
import { Container, Row } from "reactstrap";
import { ComboChart } from "./ComboChart";
import { CommonChart } from "./Common/CommonChart";
import { GanttChart } from "./GanttChart";
const GoogleChartContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={GoogleChartTitle} parent={ChartsTitle} />
      <Container fluid>
        <Row>
          <CommonChart data={GoogleChartData.areaChart1} bodyClass="p-0" divClass="chart-overflow" title={AreaChartTitle1} />
          <CommonChart data={GoogleChartData.areaChart2} bodyClass="p-0" divClass="chart-overflow" title={AreaChartTitle2} />
          <CommonChart data={GoogleChartData.columnChart1} divClass="chart-overflow" title={ColumnChartTitle1} />
          <CommonChart data={GoogleChartData.columnChart2} divClass="chart-overflow" title={ColumnChartTitle2} />
          <GanttChart />
          <CommonChart data={GoogleChartData.lineChart} title={LineChartTitle} divClass="chart-overflow" colClass="box-col-12" />
          <ComboChart />
          <CommonChart data={GoogleChartData.barChart2} title={BarChart2Title} colClass="col-xl-6 box-col-12" />
          <CommonChart data={GoogleChartData.wordTreeChart} divClass="word-tree" title={WordTreeTitle} colClass="col-xl-6 box-col-12" />
          <CommonChart data={GoogleChartData.pieChart1} bodyClass="p-0" divClass="chart-overflow" title={`${PieChart}1`} />
          <CommonChart data={GoogleChartData.pieChart2} bodyClass="p-0" divClass="chart-overflow" title={`${PieChart}2`} />
          <CommonChart data={GoogleChartData.pieChart3} bodyClass="p-0" divClass="chart-overflow" title={`${PieChart}3`} />
          <CommonChart data={GoogleChartData.pieChart4} bodyClass="p-0" divClass="chart-overflow" title={`${PieChart}4`} />
        </Row>
      </Container>
    </>
  );
};
export default GoogleChartContainer;
