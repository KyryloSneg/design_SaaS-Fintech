import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/shadcn/navigation-menu";
import { UILink } from "../ui/custom/link";
import HeaderMainNavigationDropdownMenuTrigger from "./HeaderMainNavigationDropdownMenuTrigger";
import HeaderMainNavigationTemplateContent from "./HeaderMainNavigationTemplateContent";
import HeaderMainNavigationProductContent from "./HeaderMainNavigationProductContent";
import {
  headerMenuNavigationListClassName,
  headerNestedMenuContentClassName,
} from "./shared";
import { cn } from "@/utils/shadcn";

const navigationMenuItemClassName = "px-4.5 py-2.5";
const navigationMenuItemLinkClassName = "w-full justify-start";

const HeaderMainNavigationDropdownMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <HeaderMainNavigationDropdownMenuTrigger />
          <NavigationMenuContent>
            <NavigationMenu>
              <NavigationMenuList
                className={cn(
                  headerMenuNavigationListClassName,
                  "grid grid-cols-[auto_auto] gap-2 **:text-14! **:font-semibold!",
                )}
              >
                <NavigationMenuItem className={navigationMenuItemClassName}>
                  <UILink href="#" className={navigationMenuItemLinkClassName}>
                    Blog
                  </UILink>
                </NavigationMenuItem>
                <NavigationMenuItem className={navigationMenuItemClassName}>
                  <UILink href="#" className={navigationMenuItemLinkClassName}>
                    Pricing
                  </UILink>
                </NavigationMenuItem>
                <li>
                  <NavigationMenu>
                    <NavigationMenuList
                      className={headerMenuNavigationListClassName}
                    >
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Template</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className={headerNestedMenuContentClassName}>
                            <HeaderMainNavigationTemplateContent />
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </li>
                <li>
                  <NavigationMenu>
                    <NavigationMenuList
                      className={headerMenuNavigationListClassName}
                    >
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className={headerNestedMenuContentClassName}>
                            <HeaderMainNavigationProductContent />
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </li>
              </NavigationMenuList>
            </NavigationMenu>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderMainNavigationDropdownMenu;
