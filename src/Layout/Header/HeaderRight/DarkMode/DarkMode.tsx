import SVG from "@/CommonComponent/SVG";
import ConfigDB from "@/Config/ThemeConfig";
import { Href } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { addSideBarBackGround } from "@/Redux/Reducers/ThemeCustomizerReducer";
import { useEffect } from "react";
import { BiSolidSun } from "react-icons/bi";

const DarkMode = () => {
  const dispatch = useAppDispatch();

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      ConfigDB.color.mix_background_layout = savedTheme;
      document.body.className = savedTheme;
      dispatch(addSideBarBackGround(savedTheme));
    } else {
      // Default to light theme if no preference is saved
      const defaultTheme = "light";
      ConfigDB.color.mix_background_layout = defaultTheme;
      document.body.className = defaultTheme;
      dispatch(addSideBarBackGround(defaultTheme));
      localStorage.setItem("theme", defaultTheme);
    }
  }, [dispatch]);

  const handleDarkMode = (data: string) => {
    // Update ConfigDB
    ConfigDB.color.mix_background_layout = data;

    // Update Redux state
    dispatch(addSideBarBackGround(data));

    // Update document body class
    document.body.className = data;

    // Save to localStorage for persistence
    localStorage.setItem("theme", data);
  };

  return (
    <li
      onClick={() =>
        handleDarkMode(
          ConfigDB.color.mix_background_layout !== "light"
            ? "light"
            : "dark-only"
        )
      }
    >
      <a
        className={`dark-mode ${
          ConfigDB.color.mix_background_layout !== "light" ? "active" : ""
        }`}
        href={Href}
      >
        {ConfigDB.color.mix_background_layout === "light" ? (
          <SVG iconId="moondark" />
        ) : (
         <BiSolidSun />
        )}
      </a>
    </li>
  );
};

export default DarkMode;
