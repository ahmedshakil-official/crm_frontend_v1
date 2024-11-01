import SvgIcon from "@/CommonComponent/SVG/IconSvg";
import { Inbox } from "@/Constant";
import { LetterBoxSidebar } from "@/Data/Applications/LetterBox/LetterBoxData";
import { useAppSelector } from "@/Redux/Hooks";
import { LetterBoxNavType } from "@/Types/LatterBoxType";
import { Badge, Nav, NavItem, NavLink } from "reactstrap";
import AddLabel from "./AddLabel";

const EmailNavMenu: React.FC<LetterBoxNavType> = ({ navId, setNavId }) => {
  const { inboxEmail } = useAppSelector((state) => state.letterBox);
  let starBadges = inboxEmail.filter((data) => data.star === true && 1);

  return (
    <Nav pills tabs className="main-menu email-category border-0">
      {LetterBoxSidebar.map((data, i) => (
        <NavItem key={i}>
          <NavLink className={`border-0 ${navId === data.id ? "active" : ""}`} onClick={() => setNavId(data.id)}>
            <SvgIcon className={`stroke-icon ${data.color ? `stroke-${data.color}` : ""}`} iconId={data.icon} />
            <div>
              {data.title}
              {data.badge && <Badge color="light-primary">{data.title === Inbox ? inboxEmail.length : starBadges.length}</Badge>}
            </div>
          </NavLink>
        </NavItem>
      ))}
      <AddLabel />
    </Nav>
  );
};

export default EmailNavMenu;
