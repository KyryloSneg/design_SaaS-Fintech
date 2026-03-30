"use client";

import { Button } from "@/components/ui/shadcn/button";
import Link from "next/link";

const HeroSectionMainContentTryForFreeButton = () => {
  return (
    <Button
      className="w-max"
      nativeButton={false}
      render={props => (
        <Link {...props} href="#">
          Try for free
        </Link>
      )}
    />
  );
};

export default HeroSectionMainContentTryForFreeButton;
