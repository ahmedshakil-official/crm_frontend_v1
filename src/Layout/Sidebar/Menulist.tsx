import SVG from "@/CommonComponent/SVG";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { handlePined } from "@/Redux/Reducers/LayoutSlice";
import { MenuListType } from "@/Types/LayoutTypes";
import { useSession } from "next-auth/react";
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
  const { data: session } = useSession();

  // Check if user has access to menu item based on their role
  const hasAccess = (item: any): boolean => {
    if (!item.allowedRoles || !session?.user?.user_type) return false;
    return item.allowedRoles.includes(session.user.user_type);
  };

  // Filter menu items based on user role
  const filteredMenu = menu?.filter((item: any) => hasAccess(item));

  // Utility to check if current path matches the menu item
  const isActive = (item: any): boolean => {
    if (item.path && pathname === item.path) return true;
    if (item.children) {
      return item.children.some((child: any) => isActive(child));
    }
    return false;
  };

  const handleClick = (e: React.MouseEvent, item: any) => {
    e.preventDefault();

    // Update active menu state
    const newActive = [...activeMenu];
    newActive[level] = newActive[level] === item.title ? "" : item.title;
    setActiveMenu(newActive);

    // Navigate if it's a link
    if (item.path) {
      window.location.href = item.path;
    }
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
      {filteredMenu?.map((item: any, index) => {
        const hasChildren = item.children?.some((child: any) =>
          hasAccess(child)
        );
        const isCurrentActive =
          initialLoad ||
          (hasChildren &&
            item.children?.some((child: any) => isActive(child))) ||
          item.path === pathname ||
          activeMenu[level] === item.title;

        const accessibleChildren = item.children?.filter((child: any) =>
          hasAccess(child)
        );

        return (
          <li
            key={index}
            className={`nav-item ${level === 0 ? "sidebar-list" : ""} ${
              pinedMenu.includes(item.title) ? "pined" : ""
            } ${isCurrentActive ? "active" : ""}`}
          >
            {level === 0 && (
              <i
                className="fa-solid fa-thumbtack position-absolute"
                onClick={() => dispatch(handlePined(item.title))}
              ></i>
            )}

            <Link
              href={item.path || "#"}
              className={`nav-link d-flex align-items-center gap-1 ${
                level === 0 ? "sidebar-link" : ""
              } ${isCurrentActive ? "active" : ""}`}
              onClick={(e) => handleClick(e, item)}
              style={{ cursor: "pointer" }}
            >
              {item.icon && (
                <SVG className="stroke-icon me-2" iconId={item.icon} />
              )}
              {!item.icon ? (
                <span className="flex-grow-1">{t(item.title)}</span>
              ) : (
                <h6 className={`mb-0 ${item.lanClass}`}>{t(item.title)}</h6>
              )}
              {item.badge && (
                <Badge pill color="primary" className="ms-auto">
                  {item.badge}
                </Badge>
              )}
              {hasChildren && (
                <i
                  className="fa fa-chevron-right ms-auto"
                  style={{
                    transform: isCurrentActive ? "rotate(90deg)" : "rotate(0)",
                    transition: "transform 0.3s ease",
                    marginLeft: "8px",
                  }}
                ></i>
              )}
            </Link>

            {hasChildren &&
              accessibleChildren &&
              accessibleChildren.length > 0 && (
                <ul
                  className={`nav flex-column ${
                    level === 0 ? "sidebar-submenu" : "according-submenu"
                  }`}
                  style={{
                    display: "block",
                  }}
                >
                  <Menulist
                    menu={accessibleChildren}
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
