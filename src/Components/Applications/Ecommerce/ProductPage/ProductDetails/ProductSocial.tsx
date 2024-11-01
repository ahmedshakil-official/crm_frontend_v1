import { Col, Form, Row } from "reactstrap";
import { ShareIt } from "@/Constant";
import { ProductSocialLinks } from "@/Data/Applications/Ecommerce/EcommerceData";
import Link from "next/link";

export const ProductSocial = () => {
  return (
    <>
      <Row className="py-1">
        <Col md="4">
          <h5 className="f-w-700 product-title">{ShareIt}</h5>
        </Col>
        <Col md="8">
          <div className="product-icon">
            <ul className="product-social">
              {ProductSocialLinks.map((item, index) => (
                <li className="d-inline-block" key={index}>
                  <Link href={item.link} target="_blank">
                    <i className={item.text}></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
      <hr />
    </>
  );
};