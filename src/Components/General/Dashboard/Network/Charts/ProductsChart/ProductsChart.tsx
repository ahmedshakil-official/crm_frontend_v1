import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody } from "reactstrap";

const ProductsChart: React.FC = () => {
  const PieChartData: ApexOptions = {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: [
      "FTB",
      "Remortgage",
      "House Move",
      "Buy to let",
      "Commercial",
      "Protection",
      "GI",
      "Everything",
    ],
    series: [25, 22, 15, 12, 8, 8, 3, 5],
    responsive: [
      {
        options: {
          chart: {
            height: 220,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    colors: [
      "#308E87",
      "#D946EF",
      "#F97316",
      "#0EA5E9",
      "#3EB95F",
      "#6366F1",
      "#EC4899",
      "#000000",
    ],
  };

  return (
    <Card>
      <CommonCardHeader title="Products" />
      <CardBody className="apex-chart">
        <div id="piechart">
          <ReactApexChart
            options={PieChartData}
            series={PieChartData.series}
            type="pie"
            width={380}
            height={220}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductsChart;
