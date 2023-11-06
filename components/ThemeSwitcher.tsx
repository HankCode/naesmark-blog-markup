"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex gap-x-3 items-center cursor-pointer">
      {theme === "dark" ? (
        <div onClick={() => setTheme("light")}>
          <MdLightMode className="sm:w-9 sm:h-9 w-6 h-6" />
        </div>
      ) : (
        <div onClick={() => setTheme("dark")}>
          <MdDarkMode className="sm:w-9 sm:h-9 w-6 h-6" />
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
