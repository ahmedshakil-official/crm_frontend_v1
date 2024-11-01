import { ProductFiveNavData } from "@/Data/Applications/Ecommerce/EcommerceData";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import TabOne from "./TabOne";
import TabThree from "./TabThree";
import TabTwo from "./TabTwo";
import { setTabId } from "@/Redux/Reducers/Ecommerce/AddProductSlice";

const ProductFive = () => {
  const { tabId } = useAppSelector((state) => state.addProduct);
  const dispatch = useAppDispatch();

  return (
    <div className="sidebar-body advance-options">
      <Nav className="border-tab mb-0" tabs>
        {ProductFiveNavData.map((data, i) => (
          <NavItem key={i}>
            <NavLink active={tabId === i + 1 ? true : false} onClick={() => dispatch(setTabId(i + 1))}>
              {data}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={tabId}>
        <TabPane tabId={1}>
          <TabOne />
        </TabPane>
        <TabPane tabId={2}>
          <TabTwo />
        </TabPane>
        <TabPane tabId={3}>
          <TabThree />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProductFive;
