"use client";

import { Button } from "@/components/ui/shadcn/button";
import Link from "next/link";

const GetStartedSectionButton = () => {
  return (
    <Button
      variant="secondary"
      nativeButton={false}
      className="z-1 h-12 px-4 pt-3.5 pb-3.25 font-secondary-heading text-14-tight leading-[1.66] min-[24rem]:h-14 min-[24rem]:px-6 min-[24rem]:pt-4 min-[24rem]:pb-3.75 min-[24rem]:text-16-tight min-[30rem]:h-16.75 min-[30rem]:px-10.75 min-[30rem]:pt-4.75 min-[30rem]:pb-4.5 min-[30rem]:text-18-tight"
      render={props => (
        <Link {...props} href="#">
          Get Started Now
        </Link>
      )}
    />
  );
};

export default GetStartedSectionButton;
