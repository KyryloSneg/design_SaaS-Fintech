import { UILink } from "@/components/ui/custom/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/shadcn/navigation-menu";
import HeaderMainNavigationListItem from "./HeaderMainNavigationListItem";
import {
  headerMenuNavigationListClassName,
  headerNestedMenuContentClassName,
} from "./shared";

const HeaderMainNavigationDesktop = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className={headerMenuNavigationListClassName}>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={headerNestedMenuContentClassName}>
              <HeaderMainNavigationListItem href="#">
                Project Management
              </HeaderMainNavigationListItem>
              <HeaderMainNavigationListItem href="#">
                Customer Support
              </HeaderMainNavigationListItem>
              <HeaderMainNavigationListItem href="#">
                Human Resources
              </HeaderMainNavigationListItem>
              <HeaderMainNavigationListItem href="#">
                Marketing & Communication
              </HeaderMainNavigationListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Template</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={headerNestedMenuContentClassName}>
              <HeaderMainNavigationListItem href="#">
                Web Development
              </HeaderMainNavigationListItem>
              <HeaderMainNavigationListItem href="#">
                Mobile Development
              </HeaderMainNavigationListItem>
              <HeaderMainNavigationListItem href="#">
                Business Development
              </HeaderMainNavigationListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <UILink href="#" className="ml-2.5">
            Blog
          </UILink>
        </NavigationMenuItem>
        <NavigationMenuItem className="ml-7.75">
          <UILink href="#">Pricing</UILink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderMainNavigationDesktop;
