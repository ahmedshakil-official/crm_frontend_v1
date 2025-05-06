import SVG from "@/CommonComponent/SVG";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { handlePined } from "@/Redux/Reducers/LayoutSlice";
import { MenuListType } from "@/Types/LayoutTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "reactstrap";

const Menulist: React.FC<MenuListType> = ({
  menu,
  activeMenu,
  setActiveMenu,
  level = 0,
}) => {
  const { pinedMenu } = useAppSelector((state) => state.layout);
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { t } = useTranslation("common");
  const [initialLoad, setInitialLoad] = useState(true);

  // Utility to check if current path matches the menu item
  const isActive = (item: any): boolean => {
    if (item.path && pathname === item.path) return true;
    if (item.children) {
      return item.children.some((child: any) => isActive(child));
    }
    return false;
  };

  // Set active menu items recursively on mount and route change
  useEffect(() => {
    if (initialLoad || pathname) {
      const newActiveMenu = [...activeMenu];

      const findActiveTrail = (items: any[], depth: number): boolean => {
        for (const item of items) {
          if (isActive(item)) {
            newActiveMenu[depth] = item.title;
            return true;
          }

          if (item.children) {
            const foundInChildren = findActiveTrail(item.children, depth + 1);
            if (foundInChildren) {
              newActiveMenu[depth] = item.title;
              return true;
            }
          }
        }
        return false;
      };

      menu && findActiveTrail(menu, level);
      setActiveMenu(newActiveMenu);
      setInitialLoad(false);
    }
  }, [pathname, menu, initialLoad]);

  return (
    <>
      {menu?.map((item: any, index) => {
        const hasChildren = !!item.children;
        const isCurrentActive =
          initialLoad ||
          (hasChildren &&
            item.children?.some((child: any) => isActive(child))) ||
          item.path === pathname ||
          activeMenu[level] === item.title;

        return (
          <li
            key={index}
            className={`${level === 0 ? "sidebar-list" : ""} ${
              pinedMenu.includes(item.title) ? "pined" : ""
            } ${isCurrentActive ? "active" : ""}`}
          >
            {level === 0 && (
              <i
                className="fa-solid fa-thumbtack"
                onClick={() => dispatch(handlePined(item.title))}
              ></i>
            )}

            <Link
              href={item.path || "#"}
              className={`${level === 0 ? "sidebar-link" : ""} ${
                isCurrentActive ? "active" : ""
              }`}
              onClick={(e) => {
                if (!item.path) e.preventDefault();
                const newActive = [...activeMenu];
                newActive[level] =
                  newActive[level] === item.title ? "" : item.title;
                setActiveMenu(newActive);
              }}
            >
              {item.icon && <SVG className="stroke-icon" iconId={item.icon} />}
              {!item.icon ? (
                t(item.title)
              ) : (
                <h6 className={item.lanClass}>{t(item.title)}</h6>
              )}
              {item.badge && (
                <Badge pill color="primary">
                  {item.badge}
                </Badge>
              )}
              {hasChildren && (
                <i
                  className={`iconly-Arrow-Right-2 icli ${
                    level !== 0 ? "custom-menu-arrow" : ""
                  }`}
                ></i>
              )}
            </Link>

            {hasChildren && (
              <ul
                className={`simple-list ${
                  level === 0 ? "sidebar-submenu" : "according-submenu"
                }`}
                style={{
                  display: isCurrentActive ? "block" : "none",
                }}
              >
                <Menulist
                  menu={item.children || []}
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                  level={level + 1}
                />
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
};

export default Menulist;
