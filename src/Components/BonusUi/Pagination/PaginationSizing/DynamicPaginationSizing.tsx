import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href, Next, Previous } from "@/Constant";
import { SizingPaginationDataList } from "@/Data/BonusUi/Pagination";

export const DynamicPaginationSizing = () => {
  return (
    <>
      {SizingPaginationDataList.map(({ className, size ,color}, index) => (
        <Pagination size={size} className={`pagination-${color} pagin-border-info ${className}`} key={index}>
          <PaginationItem><PaginationLink href={Href} previous>{Previous}</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink href={Href}>1</PaginationLink></PaginationItem>
          <PaginationItem active><PaginationLink href={Href}>2</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink href={Href}>3</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink href={Href} next>{Next}</PaginationLink></PaginationItem>
        </Pagination>
      ))}
    </>
  );
};
