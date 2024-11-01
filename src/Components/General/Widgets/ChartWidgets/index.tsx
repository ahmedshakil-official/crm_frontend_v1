import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Chart, Widgets } from "@/Constant";
import { Container, Row } from "reactstrap";
import CryptoAnnotations from "./CryptoAnnotations";
import CryptocurrencyPrices from "./CryptocurrencyPrices";
import Finance from "./Finance";
import LiveProducts from "./LiveProducts";
import MonthlyHistory from "./MonthlyHistory";
import MonthlySales from "./MonthlySales";
import OrderStatus from "./OrderStatus";
import OrderStatusWidgets from "./OrderStatusWidgets";
import SkillStatus from "./SkillStatus";
import StockMarket from "./StockMarket";
import TotalSaleWidgets from "./TotalSaleWidgets";
import Turnover from "./Turnover";
import UsesWidgets from "./UsesWidgets";

const ChartWidgetsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Chart} parent={Widgets} />
      <Container fluid>
        <TotalSaleWidgets />
        <Row>
          <MonthlyHistory />
          <SkillStatus />
          <OrderStatus />
        </Row>
        <Row>
          <LiveProducts />
          <Turnover />
          <CryptocurrencyPrices />
          <CryptoAnnotations />
        </Row>
        <Row>
          <StockMarket />
          <Finance />
          <OrderStatusWidgets />
          <MonthlySales />
          <UsesWidgets />
        </Row>
      </Container>
    </>
  );
};

export default ChartWidgetsContainer;
