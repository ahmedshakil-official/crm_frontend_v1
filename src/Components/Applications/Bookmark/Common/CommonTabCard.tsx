import SearchNotFoundClass from "@/CommonComponent/SearchNotFound/SearchNotFoundClass";
import { CommonTabCardProp } from "@/Types/BookmarkType";
import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import ViewBookmark from "../ViewBookmarks";

const CommonTabCard :React.FC<CommonTabCardProp> = ({ tabId, title }) => {
  return (
    <TabPane tabId={tabId}>
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <h3 className="mb-0">{title}</h3>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <SearchNotFoundClass word="Bookmark"/>
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default CommonTabCard;
