import { Search } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { filterSearchBy } from "@/Redux/Reducers/Ecommerce/FilterSlice";
import { Col, Form, FormGroup, Input } from "reactstrap";

export const SearchBox = () => {
  const dispatch = useAppDispatch();

  const handleSearchKeyword = (keyword: string) => {
    dispatch(filterSearchBy(keyword));
  };

  return (
    <Col md="9" sm="12">
      <Form>
        <FormGroup className="form-group m-0">
          <Input type="search" placeholder={Search} onChange={(e) => handleSearchKeyword(e.target.value)} />
          <i className="fa fa-search"></i>
        </FormGroup>
      </Form>
    </Col>
  );
};
