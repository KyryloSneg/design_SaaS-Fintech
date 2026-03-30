"use client";

import { Button } from "@/components/ui/shadcn/button";
import Link from "next/link";

const HeaderLoginButtonGroup = () => {
  const signInButton = (
    <Button
      size="xs"
      variant="ghost"
      className="max-2xs:px-7"
      nativeButton={false}
      render={props => (
        <Link {...props} href="#">
          Sign In
        </Link>
      )}
    />
  );

  return (
    <div className="flex items-center gap-2">
      {signInButton}
      <Button
        size="xs"
        variant="secondary"
        nativeButton={false}
        className="max-lg:hidden"
        render={props => (
          <Link {...props} href="#">
            Start Free
          </Link>
        )}
      />
    </div>
  );
};

export default HeaderLoginButtonGroup;
