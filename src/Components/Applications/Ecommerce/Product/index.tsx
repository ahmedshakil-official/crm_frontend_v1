"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Ecommerce, Product } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { fetchProductApiData } from "@/Redux/Reducers/Ecommerce/ProductSlice";
import { useEffect } from "react";
import { Container } from "reactstrap";
import ProductFeatures from "./ProductFeatures";
import ProductGrid from "./ProductGrid";

const ProductContainer = () => {
  const { sideBarOn } = useAppSelector((state) => state.filterData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
  }, []);

  return (
    <>
      <Breadcrumbs mainTitle={Product} parent={Ecommerce} />
      <Container fluid className={`product-wrapper ${sideBarOn ? "sidebaron" : ""}`}>
        <div className="product-grid">
          <ProductFeatures />
          <ProductGrid />
        </div>
      </Container>
    </>
  );
};

export default ProductContainer;
