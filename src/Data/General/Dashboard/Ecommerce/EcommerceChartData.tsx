import { ApexOptions } from "apexcharts";

const primary = "var(--theme-default)";
const secondary = "var(--theme-secondary)";

export const ChartSchoolPerformance: ApexOptions = {
  series: [
    {
      name: "series1",
      data: [2.8, 4.2, 2.9, 3, 4, 4.8, 3.3, 4, 4, 3.6],
    },
    {
      name: "series2",
      data: [2, 6, 5, 4.3, 2, 1.8, 2.2, 3, 3, 2.6],
    },
  ],
  chart: {
    height: 270,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: [secondary, primary],
  stroke: {
    curve: "smooth",
    width: 5,
  },
  grid: {
    show: true,
    borderColor: "#E5E5E5",
    strokeDashArray: 0,
    position: "back",
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        fontWeight: 500,
        fontSize: "14px",
        colors: "#AAA3A0",
      },
      formatter: (value) => {
        return `$ ${value}000`;
      },
    },
  },
  xaxis: {
    type: "category",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    tickAmount: 18,
    labels: {
      minHeight: undefined,
      maxHeight: 28,
      offsetX: 0,
      offsetY: 0,
      style: {
        fontWeight: 500,
        fontSize: "14px",
        colors: "#AAA3A0",
      },
    },
    axisBorder: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 361,
      options: {
        chart: {
          height: 190,
        },
      },
    },
  ],
};

export const OrderOverview: ApexOptions = {
  series: [
    {
      name: "Earning",
      type: "area",
      data: [50, 60, 55, 45, 40, 45, 50, 48, 55, 40, 45, 40, 48, 50, 48, 40],
    },
  ],
  annotations: {
    points: [
      {
        x: 250, // Use the numeric index for "Feb"
        y: 45,
        marker: {
          size: 10,
          fillColor: "#fff",
          strokeColor: primary,
          strokeWidth: 5,
        },
      },
    ],
  },
  chart: {
    height: 345,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: [4, 3],
    curve: "smooth",
  },
  grid: {
    show: false,
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#308e87"],
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      opacityFrom: 0.9,
      opacityTo: 0,
      stops: [0, 100],
    },
  },
  xaxis: {
    tickAmount: undefined,
    tickPlacement: "String",
    offsetX: 0,
    offsetY: 0,
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "", "", "", ""],
    labels: {
      offsetX: 0,
      show: false,
    },
    axisBorder: {
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    min: 0,
    tickAmount: 6,
    show: false,
  },
  tooltip: {
    x: {
      format: "MM",
    },
  },
  responsive: [
    {
      breakpoint: 1875,
      options: {
        annotations: {
          points: [], // Empty array to hide annotations on smaller screens
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 365,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 350,
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 370,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 250,
        },
      },
    },
  ],
};

export const OrderBar: ApexOptions = {
  series: [
    {
      name: "Revenue",
      data: [60, 70, 48, 55, 48, 40, 50, 65, 52, 70, 60, 68, 50, 65, 41, 58, 70, 41, 58, 70, 41, 58, 70, 41, 58, 70],
    },
  ],
  chart: {
    type: "bar",
    height: 250,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "60%",
    },
  },
  colors: ["#308e8733"],
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 1,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  fill: {
    opacity: 0.2,
  },
  tooltip: {
    enabled: false,
  },
  states: {
    normal: {
      filter: {
        type: "none",
      },
    },
    hover: {
      filter: {
        type: "none",
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none",
      },
    },
  },
};

export const SalesChart: ApexOptions = {
  series: [
    {
      name: "Statistics",
      data: [20, 60, 50, 70, 40, 80, 5],
    },
    {
      name: "Statistics",
      data: [80, 40, 50, 30, 60, 20, 10],
    },
  ],
  chart: {
    type: "bar",
    height: 153,
    stacked: true,
    stackType: "100%",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "40px",
      borderRadius: 2,
    },
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  colors: ["#308e87", "#D5E8E6"],
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    marker: {
      show: false,
    },
    fixed: {
      enabled: false,
      position: "bottomRight",
      offsetX: 0,
      offsetY: 0,
    },
  },
  responsive: [
    {
      breakpoint: 1661,
      options: {
        chart: {
          width: 150,
          offsetX: -30,
        },
      },
    },
    {
      breakpoint: 1451,
      options: {
        chart: {
          width: 130,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          width: 150,
          height: 140,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          width: 150,
          height: 130,
        },
      },
    },
  ],
};

export const VisitorChart: ApexOptions = {
  series: [
    {
      name: "Statistics",
      data: [20, 60, 50, 70, 40, 80, 5],
    },
    {
      name: "Statistics",
      data: [80, 40, 50, 30, 60, 20, 10],
    },
  ],
  chart: {
    type: "bar",
    height: 110,
    stacked: true,
    stackType: "100%",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "40px",
      borderRadius: 0,
    },
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  colors: [secondary, "#faded1"],
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    marker: {
      show: false,
    },
    fixed: {
      enabled: false,
      position: "bottomRight",
      offsetX: 0,
      offsetY: 0,
    },
  },
  responsive: [
    {
      breakpoint: 1661,
      options: {
        chart: {
          width: 150,
        },
      },
    },
    {
      breakpoint: 1300,
      options: {
        chart: {
          width: 130,
        },
      },
    },
    {
      breakpoint: 670,
      options: {
        chart: {
          offsetX: -30,
        },
      },
    },
  ],
};

export const SalesStatsOption:ApexOptions = {
  series: [70],
  chart: {
    height: 350,
    type: "radialBar",
    offsetY: 0,
  },
  stroke: {
    dashArray: 20,
    curve: "smooth",
    lineCap: "round",
  },
  grid: {
    padding: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      hollow: {
        size: "75%",
        image: "../assets/images/apexchart/radial-image.png",
        imageWidth: 210,
        imageHeight: 210,
        imageClipped: false,
      },
      track: {
        show: true,
        background: "#EDF6F0",
        strokeWidth: "97%",
        opacity: 0.4,
      },
      dataLabels: {
        show: true,
        name: {
          show: true,
          fontSize: "20px",
          fontFamily: undefined,
          fontWeight: 600,
          color: undefined,
          offsetY: -10,
        },
        value: {
          show: true,
          fontFamily: '"Nunito Sans", sans-serif',
          fontWeight: 700,
          fontSize: "16px",
          color: "#292929",
          offsetY: 6,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
    },
  },
  labels: ["Selling rate", "Returning: 3.2k"],
  colors: [primary, secondary],
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1580,
      options: {
        chart: {
          height: 340,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "75%",
              imageWidth: 150,
              imageHeight: 150,
            },
            dataLabels: {
              name: {
                fontSize: "14px",
                offsetY: -8,
              },
              value: {
                fontSize: "18px",
              },
            },
          },
        },
      },
    },
    {
      breakpoint: 1535,
      options: {
        plotOptions: {
          radialBar: {
            hollow: {
              size: "68%",
            },
          },
        },
      },
    },
    {
      breakpoint: 1501,
      options: {
        chart: {
          height: 350,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "75%",
            },
          },
        },
      },
    },
    {
      breakpoint: 1370,
      options: {
        chart: {
          offsetX: -10,
        },
      },
    },
    {
      breakpoint: 1321,
      options: {
        chart: {
          height: 300,
        },
      },
    },
  ],
};