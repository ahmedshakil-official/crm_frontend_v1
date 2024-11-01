import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href, Next, Previous } from "@/Constant";
import { AlignmentDataList } from "@/Data/BonusUi/Pagination";

export const DynamicPaginationAlignment = () => {
  return (
    <>
      {AlignmentDataList.map(({ className, active, color,smallText ,activeNext}, index) => (
        <Pagination className={`pagination ${className} pagin-border-${color} pagination-${color}`} key={index}>
          <PaginationItem><PaginationLink href={Href} previous>{Previous}</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink href={Href}>{smallText ? "I" : "i"}</PaginationLink></PaginationItem>
          <PaginationItem active={active}><PaginationLink href={Href}>{smallText ? "II" : "ii"}</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink href={Href}>{smallText ? "III" : "iii"}</PaginationLink></PaginationItem>
          <PaginationItem active={activeNext}><PaginationLink href={Href} next>{Next}</PaginationLink></PaginationItem>
        </Pagination>
      ))}
    </>
  );
};
