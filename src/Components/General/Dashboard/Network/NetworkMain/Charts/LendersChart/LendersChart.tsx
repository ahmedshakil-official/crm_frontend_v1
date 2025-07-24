import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody } from "reactstrap";

const LendersChart: React.FC = () => {
  const PieChartData: ApexOptions = {
    chart: {
      width: 450,
      height: 280,
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
      "Lloyds",
      "Others",
    ],
    series: [15, 13, 13, 12, 10, 8, 7, 22],
    responsive: [
      {
        options: {
          chart: {
            height: 300,
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
      "#C70039",
    ],
  };

  return (
    <Card>
      <CommonCardHeader title="Lenders" />
      <CardBody
        className="apex-chart"
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <div id="piechart" style={{ width: "100%", height: "280px" }}>
          <ReactApexChart
            options={PieChartData}
            series={PieChartData.series}
            type="pie"
            width="100%"
            height={280}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default LendersChart;
