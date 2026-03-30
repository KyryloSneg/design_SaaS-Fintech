"use client";

import { Button } from "../ui/shadcn/button";
import { NavigationMenuTrigger } from "../ui/shadcn/navigation-menu";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon } from "@hugeicons/core-free-icons";

const HeaderMainNavigationDropdownMenuTrigger = () => {
  return (
    <NavigationMenuTrigger
      render={props => (
        <Button
          {...props}
          variant="icon"
          size="icon"
          aria-label="Toggle menu"
          className="rounded-lg"
        >
          <HugeiconsIcon icon={Menu01Icon} />
        </Button>
      )}
    />
  );
};

export default HeaderMainNavigationDropdownMenuTrigger;
