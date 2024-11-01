import { Container } from "reactstrap";
import LeftRibbons from "./LeftRibbons";
import RightRibbons from "./RightRibbon";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { BonusUi, Ribbons } from "@/Constant";

const RibbonsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Ribbons} parent={BonusUi} />
      <Container fluid>
        <LeftRibbons />
        <RightRibbons />
      </Container>
    </>
  );
};

export default RibbonsContainer;
