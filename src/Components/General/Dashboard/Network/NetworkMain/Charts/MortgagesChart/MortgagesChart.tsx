import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CommonDashboardProps } from "@/Types/CommonComponents/CommonDashboard/CommonDashboardType";
import { Chart } from "react-google-charts";
import { Card, CardBody } from "reactstrap";

const MortgagesChart: React.FC<CommonDashboardProps> = ({
  isLoading,
  CommonDashboardData,
}) => {
  const chartData: (string | number)[][] = [["Category", "Value"]];
  if (!isLoading && CommonDashboardData) {
    const {
      mortgage_type_counts: {
        PURCHASE,
        REMORTGAGE,
        SECURED_LOAN,
        FURTHER_ADVANCE,
        PRODUCT_TRANSFER,
        UNSECURED,
        INVOICE_DISCOUNTING,
        ASSET_FINANCE,
        OTHER,
      },
    } = CommonDashboardData;
    chartData.push(["Purchase", PURCHASE ?? 0]);
    chartData.push(["Remortgage", REMORTGAGE ?? 0]);
    chartData.push(["Secure Loan", SECURED_LOAN ?? 0]);
    chartData.push(["Further Advance", FURTHER_ADVANCE ?? 0]);
    chartData.push(["Product Transfer", PRODUCT_TRANSFER ?? 0]);
    chartData.push(["Unsecured", UNSECURED ?? 0]);
    chartData.push(["Invoice Discounting", INVOICE_DISCOUNTING ?? 0]);
    chartData.push(["Asset Finance", ASSET_FINANCE ?? 0]);
    chartData.push(["Other Mortgage", OTHER ?? 0]);
  }

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
    slices: { 0: { offset: 0.05 } },
    colors: [
      "#8b5cf6",
      "#9ca3af",
      "#ec4899",
      "#6366f1",
      "#10b981",
      "#0ea5e9",
      "#f97316",
      "#d946ef",
      "#f87171",
    ],
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
      <CommonCardHeader title="Mortgages" />
      <CardBody className="google-chart">
        {isLoading ? (
          <div className="d-flex justify-content-between align-items-center gap-3 ms-5">
            <div
              className="skeleton-loading"
              style={{
                width: "280px",
                height: "270px",
                borderRadius: "50%",
                backgroundColor: "#e0e0e0",
              }}
            />
            <div
              className="skeleton-loading"
              style={{
                width: "50%",
                height: "100px",
                backgroundColor: "#e0e0e0",
              }}
            />
          </div>
        ) : (
          <Chart
            chartType="PieChart"
            width="100%"
            height="280px"
            data={chartData}
            options={chartOptions}
          />
        )}
      </CardBody>
    </Card>
  );
};

export default MortgagesChart;
