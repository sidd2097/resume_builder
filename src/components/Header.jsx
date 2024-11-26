import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
        Interactive Resume Builder
      </h1>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
