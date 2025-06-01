import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const CaseAdviserActivityTrends: React.FC = () => {
  const chartOptions: ApexOptions = {
    chart: {
      height: 350,
      type: "line" as const,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: ["#2E93fA", "#66DA26"],
    dataLabels: {
      enabled: true,
      background: {
        enabled: true,
        padding: 4,
        borderRadius: 2,
        borderWidth: 0,
        opacity: 0.9,
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    title: {
      text: "Case & Adviser Activity Trends",
      align: "left",
      style: {
        fontSize: "18px",
        fontWeight: "500",
      },
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    markers: {
      size: 6,
      hover: {
        size: 8,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      title: {
        text: "Month",
      },
    },
    yaxis: {
      title: {
        text: "Number of Activities",
      },
      min: 0,
      max: 400,
      tickAmount: 4,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y: number) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " activities";
          }
          return y;
        },
      },
    },
  };

  const chartSeries = [
    {
      name: "Case Activities",
      data: [240, 300, 285, 380, 290, 300],
    },
    {
      name: "Adviser Activities",
      data: [35, 40, 45, 42, 38, 41],
    },
  ];

  return (
    <Col md={6}>
      <Card className="border">
        <CardBody>
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="line"
            height={350}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default CaseAdviserActivityTrends;
