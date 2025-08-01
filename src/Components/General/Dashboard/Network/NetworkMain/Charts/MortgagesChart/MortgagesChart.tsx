import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Chart } from "react-google-charts";
import { Card, CardBody } from "reactstrap";

const MortgagesChart: React.FC = () => {
  // ChartData: [Label, Value]
  const chartData = [
    ["Category", "Value"],
    ["Purchase", 25],
    ["Remortgage", 22],
    ["Secure Loan", 15],
    ["Further Advance", 12],
    ["Product Transfer", 8],
    ["Unsecured", 8],
    ["Invoice Discounting", 3],
    ["Asset Finance", 5],
    ["Others", 10],
  ];

  const chartOptions = {
    title: "",
    is3D: true,
    pieHole: 0,
    pieStartAngle: 0,
    legend: {
      position: "right" as const,
      alignment: "center" as const,
      textStyle: {
        color: "#333",
        fontSize: 12,
      },
    },
    slices: { 0: { offset: 0.05 } },
    colors: [
      "#8b5cf6",
      "#9ca3af",
      "#ec4899",
      "#6366f1",
      "#10b981",
      "#0ea5e9",
      "#f97316",
      "#d946ef",
      "#f87171",
    ],
    chartArea: { left: 30, top: 30, width: "90%", height: "90%" },
    backgroundColor: "transparent",
    tooltip: {
      textStyle: {
        fontSize: 10,
      },
    },
    fontSize: 11,
  };

  return (
    <Card>
      <CommonCardHeader title="Mortgages" />
      <CardBody className="google-chart">
        <Chart
          chartType="PieChart"
          width="100%"
          height="280px"
          data={chartData}
          options={chartOptions}
        />
      </CardBody>
    </Card>
  );
};

export default MortgagesChart;
