"use client";
import React, { useEffect } from "react";
import { Card, Container, Row } from "reactstrap";
import ImageSlider from "./ImageSlider";
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchProductApiData } from "@/Redux/Reducers/Ecommerce/ProductSlice";
import ProductDetails from "./ProductDetails";
import BrandDetail from "./BrandDetail";
import ClothsDetails from "./ClothsDetails";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Ecommerce, ProductPage } from "@/Constant";

const ProductPageContainer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductApiData());
  }, []);

  return (
    <>
      <Breadcrumbs mainTitle={ProductPage} parent={Ecommerce} />
      <Container fluid>
        <div>
          <Row className="product-page-main">
            <ImageSlider />
            <ProductDetails />
            <BrandDetail />
            <Card>
              <Row className="product-page-main">
                <ClothsDetails />
              </Row>
            </Card>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default ProductPageContainer;
