import { ComposeEmail } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setComposeEmail } from "@/Redux/Reducers/LetterBoxSlice";
import { LetterBoxNavType } from "@/Types/LatterBoxType";
import { Button, Card, CardBody } from "reactstrap";
import EmailNavMenu from "./EmailNavMenu";

const EmailLeftSidebar: React.FC<LetterBoxNavType> = ({ navId, setNavId }) => {
  const { composeEmail } = useAppSelector((state) => state.letterBox);
  const dispatch = useAppDispatch();

  return (
    <div className="email-left-aside">
      <Card>
        <CardBody>
          <div className="email-app-sidebar">
            <Button color="primary" className="emailbox" onClick={() => dispatch(setComposeEmail(!composeEmail))}>
              <i className="fa-solid fa-plus" />
              {ComposeEmail}
            </Button>
            <EmailNavMenu navId={navId} setNavId={setNavId} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default EmailLeftSidebar;
