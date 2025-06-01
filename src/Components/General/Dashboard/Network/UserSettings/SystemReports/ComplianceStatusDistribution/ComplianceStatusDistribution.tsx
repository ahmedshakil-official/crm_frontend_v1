import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const ComplianceStatusDistribution: React.FC = () => {
  const chartData = {
    series: [91, 8, 1], // Compliant, Minor Issues, Major Issues
    options: {
      chart: {
        type: "pie",
        height: 350,
      },
      labels: ["Compliant", "Minor Issues", "Major Issues"],
      colors: ["#00E396", "#FEB019", "#FF4560"],
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        labels: {
          colors: undefined,
          useSeriesColors: false,
        },
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: "#fff",
          radius: 12,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 5,
        },
      },
      title: {
        text: "Compliance Status Distribution",
        align: "left",
        style: {
          fontSize: "18px",
          fontWeight: "500",
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: number) {
          return val.toFixed(0) + "%";
        },
        style: {
          fontSize: "14px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: "400",
        },
        dropShadow: {
          enabled: false,
        },
      },
      plotOptions: {
        pie: {
          donut: {
            size: "0%",
          },
          customScale: 0.9,
          offsetY: 10,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 280,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      tooltip: {
        y: {
          formatter: function (val: number) {
            return val + "%";
          },
        },
      },
    } as ApexOptions,
  };

  return (
    <Col md="6">
      <Card className="shadow-sm">
        <CardBody>
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="pie"
            height={350}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ComplianceStatusDistribution;
