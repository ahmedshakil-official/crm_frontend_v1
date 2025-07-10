import dynamic from "next/dynamic";
import React from "react";
import { Card } from "reactstrap";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DocumentsWorkflow: React.FC = () => {
  const options = {
    chart: {
      type: "bar",
      height: 300,
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        borderRadius: 4,
      },
    },
    colors: ["#6B7280", "#10B981", "#F59E0B"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: "Documents",
      },
      min: 0,
      max: 60,
      tickAmount: 4,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val + " documents";
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
      name: "Received",
      data: [45, 38, 52, 40],
    },
    {
      name: "Processed",
      data: [42, 35, 48, 38],
    },
    {
      name: "Pending",
      data: [3, 3, 4, 2],
    },
  ];

  return (
    <Card className="border-0 p-3 shadow-sm bg-white">
      <h4 className="text-xl font-semibold mb-4">Document Workflow</h4>
      <Chart options={options as any} series={series} type="bar" height="300px" />
    </Card>
  );
};

export default DocumentsWorkflow;
