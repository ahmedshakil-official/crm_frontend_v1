import { SearchLearningPlaceholder } from "@/Constant";
import { Input } from "reactstrap";

const SearchInput = () => {
  return (
    <div className="job-filter">
      <div className="faq-form">
        <Input type="text" placeholder={SearchLearningPlaceholder}/>
        <i className="fa-solid fa-magnifying-glass search-icon" />
      </div>
    </div>
  );
};

export default SearchInput;
