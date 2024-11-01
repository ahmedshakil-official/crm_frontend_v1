import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Icons, ThemifyIcon } from "@/Constant";
import { ThemifyIconData } from "@/Data/Icons/ThemifyIcon";
import { useCallback, useState } from "react";
import { Container, Row } from "reactstrap";
import IconMarkUp from "../IconMarkUp";
import ThemifyIconCard from "./ThemifyIconCard";

const ThemifyIconsContainer = () => {
  const [iTag, setITag] = useState<string | object>("");
  const [icon, setIcon] = useState<string | object>("");

  const callback = useCallback((tag: string) => {
    setITag({
      iTag: '<i className="' + tag + '"></i>',
    });
    setIcon({
      icon: "" + tag + " fa-2x",
    });
  }, []);
  return (
    <>
      <Breadcrumbs mainTitle={ThemifyIcon} parent={Icons} />
      <Container fluid>
        {ThemifyIconData.map((item, i) => {
          return (
            <Row key={i} className="icon-main">
              <ThemifyIconCard iconType={item.data} title={item.title} parentCallback={callback} />
            </Row>
          );
        })}
      </Container>
      <IconMarkUp iTag={iTag} icons={icon} svg={false} />
    </>
  );
};

export default ThemifyIconsContainer;
