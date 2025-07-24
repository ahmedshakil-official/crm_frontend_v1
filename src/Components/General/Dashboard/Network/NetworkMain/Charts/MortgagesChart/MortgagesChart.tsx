import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody } from "reactstrap";

const MortgagesChart: React.FC = () => {
  const PieChartData: ApexOptions = {
    chart: {
      width: 450,
      height: 280,
      type: "pie",
    },
    labels: [
      "Purchase",
      "Remortgage",
      "Secure Loan",
      "Further Advance",
      "Product Transfer",
      "Unsecured",
      "Invoice Discounting",
      "Asset Finance",
      "Others",
    ],
    series: [25, 22, 15, 12, 8, 8, 3, 5, 10],
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
      "#308E87",
      "#D946EF",
      "#F97316",
      "#0EA5E9",
      "#3EB95F",
      "#6366F1",
      "#EC4899",
      "#000000",
      "#C70039",
    ],
  };

  return (
    <Card>
      <CommonCardHeader title="Mortgages" />
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

export default MortgagesChart;
