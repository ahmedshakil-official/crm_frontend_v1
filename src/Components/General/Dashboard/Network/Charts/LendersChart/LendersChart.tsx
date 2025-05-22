import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody } from "reactstrap";

const LendersChart: React.FC = () => {
  const PieChartData: ApexOptions = {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: [
      "Halifax",
      "Nationwide",
      "Santander",
      "Natwest",
      "Barclays",
      "HSBC",
      "Rightmove",
      "Everything else",
    ],
    series: [15, 13, 13, 12, 10, 8, 7, 22],
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
      "#3EB95F",
      "#D946EF",
      "#E74B2B",
      "#0077FF",
      "#308E87",
      "#6366F1",
      "#EC4899",
      "#000000",
    ],
  };

  return (
    <Card>
      <CommonCardHeader title="Lenders" />
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

export default LendersChart;
