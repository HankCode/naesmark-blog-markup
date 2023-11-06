"use client";

import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";

const link = [
  {
    label: "Hem",
    href: "/",
  },
  {
    label: "Mitt uppdrag",
    href: "/about",
  },
  {
    label: "Min historia",
    href: "/",
  },
];

function NavBar() {
  return (
    <nav className="w-full py-2.5 sm:py-7 bg-transparent">
      <div className="site-width xPadding flex justify-between items-center sm:text-lg text-base">
        <Link href="/">
          <img src="logo.png" alt="logo" />
        </Link>
        <div className="flex items-center gap-x-10">
          {/* <div className="flex items-center sm:gap-x-5 gap-x-3">
            {link.map((link) => {
              return (
                <Link className="hover:underline" href={link.href} key={link.label}>
                  {link.label}
                </Link>
              );
            })}
          </div> */}
          <div className="flex items-center sm:gap-x-7 gap-x-4">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
