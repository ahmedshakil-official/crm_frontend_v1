import { Container } from "reactstrap";
import OrganisationStaffBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import AddNewComment from "./AddNewComment/AddNewComment";
import CommentCards from "./CommentCards/CommentCards";
import InternalComments from "./InternalComments/InternalComments";
import SearchAndFilters from "./SearchAndFilters/SearchAndFilters";

const index: React.FC = () => {
  return (
    <>
      <OrganisationStaffBreadcrumbs
        mainTitle="Comments"
        title="Hello! there"
        activePage="Comments"
      />
      <Container fluid>
        <InternalComments />
        <AddNewComment />
        <SearchAndFilters />
        <CommentCards />
      </Container>
    </>
  );
};

export default index;
