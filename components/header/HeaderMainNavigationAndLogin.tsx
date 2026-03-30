import HeaderLoginButtonGroup from "./HeaderLoginButtonGroup";
import HeaderMainNavigationDesktop from "./HeaderMainNavigationDesktop";

const HeaderMainNavigationAndLogin = () => {
  return (
    <nav className="w-full">
      <ul className="flex items-center justify-between gap-8">
        <li className="hidden lg:block">
          <HeaderMainNavigationDesktop />
        </li>
        <li>
          <HeaderLoginButtonGroup />
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMainNavigationAndLogin;
