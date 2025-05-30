import { MenuList } from "@/Data/Layout/SidebarData";
import { useAppSelector } from "@/Redux/Hooks";
import { MenuItem } from "@/Types/LayoutTypes";
import { useSession } from "next-auth/react";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import Menulist from "./Menulist";

const SidebarMenuList = () => {
  const [activeMenu, setActiveMenu] = useState<string[]>(["", "", ""]);
  const { pinedMenu } = useAppSelector((state) => state.layout);
  const { data: session } = useSession();
  const { t } = useTranslation("common");

  // Check if user has access to menu item based on their role
  const hasAccess = (item: MenuItem): boolean => {
    if (!item.allowedRoles || !session?.user?.user_type) return false;
    return item.allowedRoles.includes(session.user.user_type);
  };

  // Check if any items in the menu section are accessible
  const hasAccessibleItems = (mainMenu: MenuItem): boolean => {
    return mainMenu.Items?.some((item) => hasAccess(item)) || false;
  };

  const shouldHideMenu = (mainMenu: MenuItem) => {
    return (
      mainMenu?.Items?.map((data) => data.title).every((titles) =>
        pinedMenu.includes(titles || "")
      ) || !hasAccessibleItems(mainMenu)
    );
  };

  return (
    <>
      {MenuList &&
        MenuList.map(
          (mainMenu: MenuItem, index) =>
            hasAccess(mainMenu) && (
              <Fragment key={index}>
                <li
                  className={`sidebar-main-title ${
                    shouldHideMenu(mainMenu) ? "d-none" : ""
                  }`}
                >
                  <div>
                    <h5
                      className={`f-w-700 sidebar-title ${
                        mainMenu.lanClass && mainMenu.lanClass
                      }`}
                    >
                      {t(mainMenu.title)}
                    </h5>
                  </div>
                </li>
                <Menulist
                  menu={mainMenu.Items}
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                  level={0}
                />
              </Fragment>
            )
        )}
    </>
  );
};

export default SidebarMenuList;
