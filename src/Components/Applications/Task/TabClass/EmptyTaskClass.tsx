import { Printer } from "react-feather";
import { Card, CardBody, CardHeader } from "reactstrap";
import { Href, Print } from "@/Constant";
import { EmptyTaskClassProp } from "@/Types/TaskType";
import Link from "next/link";
import SearchNotFoundClass from "@/CommonComponent/SearchNotFound/SearchNotFoundClass";

const EmptyTaskClass :React.FC<EmptyTaskClassProp> = ({ title }) => {
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h3 className="mb-0">{title}</h3>
        <Link href={Href}>
          <Printer className="me-2" />{Print}</Link>
      </CardHeader>
      <CardBody>
        <SearchNotFoundClass word="task"/>
      </CardBody>
    </Card>
  );
};
export default EmptyTaskClass;
