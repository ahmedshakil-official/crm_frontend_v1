import dynamic from "next/dynamic";
import React from "react";
import { Card } from "reactstrap";

// Dynamically import ApexCharts with SSR disabled
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ComplianceStatus: React.FC = () => {
  // Sample data - replace with actual data from your API
  const series = [75, 15, 10]; // Compliant, Pending Review, Issues

  const options = {
    chart: {
      type: "donut",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    colors: ["#00C853", "#FFB300", "#FF5252"],
    labels: ["Compliant", "Pending Review", "Issues"],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      markers: {
        width: 12,
        height: 12,
        radius: 6,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "22px",
              fontFamily: "inherit",
              color: undefined,
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: "16px",
              fontFamily: "inherit",
              color: undefined,
              offsetY: 16,
              formatter: function (val: number) {
                return val + "%";
              },
            },
            total: {
              show: true,
              label: "Total",
              color: "#373d3f",
              formatter: function (w: any) {
                return (
                  w.globals.seriesTotals.reduce((a: number, b: number) => {
                    return a + b;
                  }, 0) + "%"
                );
              },
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    stroke: {
      width: 0,
    },
  };

  return (
    <Card className="bg-white p-4 shadow-sm">
      <h4 className="mb-4 text-lg font-semibold">Compliance Status</h4>
      <Chart
        options={options as any}
        series={series}
        type="donut"
        height={230}
      />
    </Card>
  );
};

export default ComplianceStatus;
