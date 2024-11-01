import SvgIcon from "@/CommonComponent/SVG/IconSvg";
import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { TopSellingProductsHeading } from "@/Constant";
import { TopSellingProductsData } from "@/Data/General/Dashboard/Ecommerce/EcommerceData";
import Link from "next/link";
import { Card, CardBody, Col } from "reactstrap";

const TopSellingProducts = () => {
  return (
    <Col xxl="3" xl="4" md="7" sm="6" className="box-col-4">
      <Card className="selling-product">
        <DashboardCommonHeader title={TopSellingProductsHeading} />
        <CardBody>
          <ul>
            {TopSellingProductsData.map((data, index) => (
              <li className="d-flex align-items-center gap-2" key={index}>
                <div className={`flex-shrink-0 bg-light-${data.color} border-light-${data.color}`}>
                  <SvgIcon className={`stroke-icon stroke-${data.color}`} iconId={data.icon} />
                </div>
                <div className="flex-grow-1">
                  <Link href={"/ecommerce/product"}>
                    <h6>{data.title}</h6>
                  </Link>
                  <p>{data.text}</p>
                </div>
                <div className="recent-text">
                  <h5>{data.price}</h5>
                  <p>{data.sales}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TopSellingProducts;
