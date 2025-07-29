import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import Chart from "react-google-charts";
import { Card, CardBody } from "reactstrap";

const LendersChart: React.FC = () => {
  // ChartData: [Label, Value]
  const chartData = [
    ["Category", "Value"],
    ["Barclays", 25],
    ["Halifax", 22],
    ["NatWest", 15],
    ["Nationwide", 12],
    ["Amicus PLC", 8],
    ["Santander", 8],
    ["Atom Bank", 3],
    ["Accord Mortgages", 5],
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
      <CommonCardHeader title="Lenders" />
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

export default LendersChart;
