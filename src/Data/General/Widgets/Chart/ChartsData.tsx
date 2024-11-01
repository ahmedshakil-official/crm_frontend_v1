import { ApexOptions } from "apexcharts";
import { ProductChart, ProjectChart, SaleChart } from "./WidgetsChartData";

export const SaleChartData = [
  {
    title: "Total Sale",
    amount: "$3654.00",
    description: "Compare to last month",
    percentage: "+65%",
    id: "chart-widget1",
    chart: SaleChart,
  },
  {
    title: "Total Project",
    amount: "12569",
    description: "Compare to last month",
    percentage: "+65%",
    id: "chart-widget2",
    chart: ProjectChart,
  },
  {
    title: "Total Product",
    amount: "93M",
    description: "Compare to last month",
    percentage: "+65%",
    id: "chart-widget3",
    chart: ProductChart,
  },
];

export const WidgetContentData = [
  {
    id: 1,
    color: "danger",
    icon: "cart",
    rate: "10,000",
    text: "Purchase",
    arrow: "up",
    percent: "+50",
  },
  {
    id: 2,
    color: "primary",
    icon: "tag",
    rate: "4,200",
    text: "Sales",
    arrow: "up",
    percent: "+70",
  },
  {
    id: 3,
    color: "secondary",
    icon: "return-box",
    rate: "7000",
    text: "Sales return",
    arrow: "down",
    percent: "-20",
  },
  {
    id: 4,
    color: "success",
    icon: "rate",
    rate: "5700",
    text: "Purchase rate",
    arrow: "up",
    percent: "+70",
  },
];

export var orderChart: ApexOptions = {
  series: [
    {
      name: "Daily",
      data: [2.15, 3, 1.5, 2, 2.4, 3, 2.4, 2.8, 1.5, 1.7, 3, 2.5, 3, 2, 2.15, 3, 1.1],
    },
    {
      name: "Weekly",
      data: [-2.15, -3, -1.5, -2, -2.4, -3, -2.4, -2.8, -1.5, -1.7, -3, -2.5, -3, -2, -2.15, -3, -1.1],
    },
    {
      name: "Monthly",
      data: [-2.25, -2.35, -2.45, -2.55, -2.65, -2.75, -2.85, -2.95, -3.0, -3.1, -3.2, -3.25, -3.1, -3.0, -2.95, -2.85, -2.75],
    },
    {
      name: "Yearly",
      data: [2.25, 2.35, 2.45, 2.55, 2.65, 2.75, 2.85, 2.95, 3.0, 3.1, 3.2, 3.25, 3.1, 3.0, 2.95, 2.85, 2.75],
    },
  ],
  chart: {
    type: "bar",
    width: 180,
    height: 120,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "40%",
      barHeight: "80%",
    },
  },
  colors: ["#308e87", "#308e87", "var(--body-color)", "var(--body-color)"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 0,
  },
  legend: {
    show: false,
  },
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  yaxis: {
    min: -5,
    max: 5,
    show: false,
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  tooltip: {
    shared: false,
    x: {
      show: false,
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    offsetX: 0,
    offsetY: 0,
    labels: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
    axisBorder: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
    axisTicks: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1760,
      options: {
        chart: {
          width: 160,
        },
      },
    },
    {
      breakpoint: 1601,
      options: {
        chart: {
          height: 110,
        },
      },
    },
    {
      breakpoint: 1560,
      options: {
        chart: {
          width: 140,
        },
      },
    },
    {
      breakpoint: 1460,
      options: {
        chart: {
          width: 120,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          width: 150,
        },
      },
    },
    {
      breakpoint: 1110,
      options: {
        chart: {
          width: 200,
        },
      },
    },
    {
      breakpoint: 700,
      options: {
        chart: {
          width: 150,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          width: 220,
        },
      },
    },
    {
      breakpoint: 420,
      options: {
        chart: {
          width: 150,
        },
      },
    },
  ],
};

export var profitChart: ApexOptions = {
  series: [
    {
      name: "Desktops",
      data: [210, 180, 650, 200, 600, 100, 800, 300, 500],
    },
  ],
  chart: {
    width: 200,
    height: 150,
    type: "line",
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 5,
      left: 0,
      blur: 3,
      color: "#f39159",
      opacity: 0.3,
    },
    zoom: {
      enabled: false,
    },
  },
  colors: ["#f39159"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
    curve: "smooth",
  },
  grid: {
    show: false,
  },
  tooltip: {
    x: {
      show: false,
    },
    marker: {
      show: false,
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
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
  responsive: [
    {
      breakpoint: 1780,
      options: {
        chart: {
          width: 180,
        },
      },
    },
    {
      breakpoint: 1680,
      options: {
        chart: {
          width: 160,
        },
      },
    },
    {
      breakpoint: 1601,
      options: {
        chart: {
          height: 110,
        },
      },
    },
    {
      breakpoint: 1560,
      options: {
        chart: {
          width: 140,
        },
      },
    },
    {
      breakpoint: 1460,
      options: {
        chart: {
          width: 120,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          width: 150,
        },
      },
    },
    {
      breakpoint: 1110,
      options: {
        chart: {
          width: 200,
        },
      },
    },
    {
      breakpoint: 700,
      options: {
        chart: {
          width: 150,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          width: 220,
        },
      },
    },
    {
      breakpoint: 420,
      options: {
        chart: {
          width: 150,
        },
      },
    },
  ],
};
export const WidgetWithChart = [
  {
    id: 1,
    rate: "1,80",
    text: "Orders",
    chartClass: "order",
    chart: {
      ...orderChart,
      series: orderChart.series,
      type: orderChart.chart?.type,
      height: orderChart.chart?.height,
      width: orderChart.chart?.width,
    },
  },
  {
    id: 2,
    rate: "6,90",
    text: "Profit",
    chartClass: "profit",
    chart: {
      ...profitChart,
      series: profitChart.series,
      type: profitChart.chart?.type,
      height: profitChart.chart?.height,
      width: profitChart.chart?.width,
    },
  },
];

export const SmallWidgetData = [
  {
      id: 1,
      color: 'primary',
      text: 'New Orders',
      arrow: 'up',
      rate: '2,435',
      percent: '+50',
      icon: 'new-order'
  },
  {
      id: 2,
      color: 'warning',
      text: 'New Customers',
      arrow: 'up',
      rate: '2,908',
      percent: '+20',
      icon: 'customers'
  },
  {
      id: 3,
      color: 'secondary',
      text: 'Average Sale',
      arrow: 'down',
      rate: '$389k',
      percent: '-10',
      icon: 'sale'
  },
  {
      id: 4,
      color: 'success',
      text: 'Gross Profit',
      arrow: 'up',
      rate: '$3,908',
      percent: '+80',
      icon: 'profit'
  }
];