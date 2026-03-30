import Link from "next/link";
import HeaderMainNavigationAndLogin from "./HeaderMainNavigationAndLogin";
import HeaderMainNavigationDropdownMenu from "./HeaderMainNavigationDropdownMenu";

const Header = () => {
  return (
    <header className="relative mb-30 w-full px-[2.5%] pt-6 xs:px-[9.375%] xs:pt-10">
      <nav>
        <ul className="grid grid-cols-[auto_auto_1fr] items-center justify-between gap-x-3 xs:gap-x-6 lg:grid-cols-[1fr_2fr]">
          <li className="block lg:hidden">
            <HeaderMainNavigationDropdownMenu />
          </li>
          <li className="w-max">
            <Link href="#">
              <h1 className="text-20">AR SHAKIR</h1>
            </Link>
          </li>
          <li className="flex">
            <HeaderMainNavigationAndLogin />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
