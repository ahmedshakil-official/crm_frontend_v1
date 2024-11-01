import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath, KnowledgebaseHelpQue, KnowledgebasePlaceholder } from "@/Constant";
import { Search } from "react-feather";
import { Col, Form, FormGroup, Input } from 'reactstrap';

const KnowledgebaseHelp = () => {
  return (
    <Col xs="12 position-relative">
      <div className="knowledgebase-bg">
        <RatioImage className="bg-img-cover bg-center w-100 h-100 rounded-4" src={`${ImagePath}/knowledgebase/bg_1.jpg`} alt="looginpage"/></div>
      <div className="knowledgebase-search">
        <div>
          <h3 className="f-w-500">{KnowledgebaseHelpQue}</h3> 
          <Form onSubmit={(e)=>e.preventDefault()} className="form-inline" method="get">
            <div className="w-100 mb-0"> 
              <Search/> 
              <Input className="w-100 border-0 shadow-none" type="text" placeholder={KnowledgebasePlaceholder}/>
            </div>
          </Form>
        </div>
      </div>
    </Col>
  );
};

export default KnowledgebaseHelp;
