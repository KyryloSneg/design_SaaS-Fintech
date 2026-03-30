"use client";

import { Button } from "@/components/ui/shadcn/button";
import { cn } from "@/utils/shadcn";
import Link from "next/link";

const buttonBaseClassName = "text-16-tight leading-[1.875] max-w-44.5";

const DownloadAppSectionButtonGroup = () => {
  return (
    <div className="grid grid-cols-[1fr] items-center justify-center gap-2.75 2sm:grid-cols-[auto_auto]">
      <Button
        variant="secondary"
        size="sm"
        className={cn(buttonBaseClassName, "gap-2.75")}
        nativeButton={false}
        render={props => (
          <Link {...props} href="#">
            <img
              src="/icons/apple-logo.svg"
              alt=""
              draggable="false"
              width={17}
              height={21}
              className="h-[21px] w-[17px]"
              loading="lazy"
            />
            Playstore
          </Link>
        )}
      />
      <Button
        size="sm"
        className={cn(buttonBaseClassName, "gap-0.75")}
        nativeButton={false}
        render={props => (
          <Link {...props} href="#">
            <img
              src="/icons/google-play.svg"
              alt=""
              draggable="false"
              width={30}
              height={30}
              className="size-[30px]"
              loading="lazy"
            />
            Google Play
          </Link>
        )}
      />
    </div>
  );
};

export default DownloadAppSectionButtonGroup;
