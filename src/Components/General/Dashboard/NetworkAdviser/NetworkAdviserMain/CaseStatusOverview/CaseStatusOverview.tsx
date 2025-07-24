import dynamic from "next/dynamic";
import React from "react";
import { Card } from "reactstrap";

// Dynamically import ApexCharts with SSR disabled
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CaseStatusOverview: React.FC = () => {
  // Sample data - replace with actual data from your API
  const series = [70, 20, 10]; // Compliant, In Progress, Issues

  const options = {
    chart: {
      type: "donut",
      background: "transparent",
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
    colors: ["#10b981", "#f59e0b", "#94a3b8"],
    labels: ["Compliant", "In Progress", "Issues"],
    legend: {
      position: "right",
      fontSize: "14px",
      offsetY: 20,
      markers: {
        width: 8,
        height: 8,
        radius: 4,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "14px",
              fontFamily: "inherit",
              color: "#64748b",
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: "24px",
              fontFamily: "inherit",
              color: "#1e293b",
              offsetY: 10,
              formatter: function (val: number) {
                return val + "%";
              },
            },
            total: {
              show: true,
              label: "Total Cases",
              color: "#64748b",
              fontSize: "14px",
              formatter: function (w: any) {
                return w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0) + " Cases";
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
        breakpoint: 768,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
            offsetY: 0,
            itemMargin: {
              horizontal: 8,
              vertical: 2,
            },
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
      <h4 className="mb-3 text-lg font-semibold">Case Status Overview</h4>
      <Chart
        options={options as any}
        series={series}
        type="donut"
        height={300}
      />
    </Card>
  );
};

export default CaseStatusOverview;
