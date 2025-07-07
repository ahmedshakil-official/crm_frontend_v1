import React from "react";
import { Chart } from "react-google-charts";
import { Card, CardBody } from "reactstrap";

const data = [
  ["Platform", "Engagement", "Leads"],
  ["Facebook", 450, 20],
  ["Instagram", 800, 10],
  ["LinkedIn", 240, 15],
  ["Twitter", 150, 5],
];

const options = {
  chartArea: { width: "60%" },
  colors: ["#a259ff", "#ff9900"],
  hAxis: {
    title: "Platform",
    minValue: 0,
  },
  vAxis: {
    title: "Total",
  },
  legend: { position: "top" },
};

const SocialMediaPerformance: React.FC = () => {
  return (
    <Card>
      <CardBody>
        <h2>Social Media Performance</h2>
        <p>Engagement, reach, and leads by platform</p>
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="300px"
          data={data}
          options={options}
        />
      </CardBody>
    </Card>
  );
};

export default SocialMediaPerformance;
