import { Categories, NewProducts, Price } from "@/Constant";
import GenderFilter from "./GenderFilter";
import BrandFilter from "./BrandFilter";
import ColorsFilter from "./ColorsFilter";
import RangeSlider from "./RangeSlider";

export const Category = () => {
  return (
    <>
      <div className="product-filter">
        <h6 className="f-w-700">{Categories}</h6>
        <GenderFilter />
      </div>
      <BrandFilter />
      <ColorsFilter />
      <div className="product-filter pb-0 price-range">
        <h6 className="f-w-700">{Price}</h6>
        <RangeSlider />
        <h6 className="f-w-700 mb-2 mt-5">{NewProducts}</h6>
      </div>
    </>
  );
};
