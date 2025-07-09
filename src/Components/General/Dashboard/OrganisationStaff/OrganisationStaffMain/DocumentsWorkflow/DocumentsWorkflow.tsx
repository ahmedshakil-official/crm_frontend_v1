import dynamic from "next/dynamic";
import React from "react";
import { Card } from "reactstrap";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MonthlyPerformance: React.FC = () => {
  const options = {
    chart: {
      type: "bar",
      height: 300,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
      },
    },
    colors: ["#38bdf8", "#cbd5e1"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: "Performance",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val + " cases";
        },
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
    },
  };

  const series = [
    {
      name: "Performance",
      data: [8, 12, 9, 15, 11, 14],
    },
    {
      name: "Target",
      data: [10, 10, 10, 12, 12, 12],
    },
  ];

  return (
    <Card className="border-0 p-3 shadow-sm bg-white">
      <h4 className="text-xl font-semibold mb-4">
        Monthly Performance vs Target
      </h4>
      <Chart
        options={options as any}
        series={series}
        type="bar"
        height="300px"
      />
    </Card>
  );
};

export default MonthlyPerformance;
