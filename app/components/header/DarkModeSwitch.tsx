"use client";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="text-2xl hover:cursor-auto hover:scale-110 transition hover:text-amber-500">
      {currentTheme === "dark" ? (
        <MdLightMode onClick={() => setTheme("light")} />
      ) : (
        <MdDarkMode onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}
