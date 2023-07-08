import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

function NavBar() {
  return (
    <nav className="w-full py-2.5 dark:bg-dark2 bg-neutral-100">
      <div className="site-width xPadding flex justify-between items-center">
        <Link href="/">
          <div className="font-medium sm:text-base text-sm">Henrik Näsmark</div>
        </Link>
        <div className="flex items-center gap-x-7">
          <div className="flex items-center sm:text-base text-sm gap-x-5">
            {/* <Link href="/blog">blog</Link> */}
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
