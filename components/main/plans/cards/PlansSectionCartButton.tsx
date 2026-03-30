"use client";

import { Button } from "@/components/ui/shadcn/button";
import Link from "next/link";
import { defaultCardVariant } from "./shared";
import type { CardVariant } from "./shared";
import { cn } from "@/utils/shadcn";

export interface PlansSectionCartButtonProps {
  variant: CardVariant;
  text: string;
  href: string;
}

const PlansSectionCartButton = ({
  variant = defaultCardVariant,
  text,
  href,
}: PlansSectionCartButtonProps) => {
  return (
    <Button
      variant={variant === "default" ? "outlineGhost" : "defaultContrast"}
      size="lg"
      nativeButton={false}
      render={props => (
        <Link {...props} href={href}>
          {text}
        </Link>
      )}
      className={cn(
        "tracking-tighter max-plan-card-full-text-size:text-16",
        variant === "default" &&
          "border-foreground-subheader-transparent-32 text-foreground-subheader",
        variant === "primary" && "text-foreground-header",
      )}
    />
  );
};

export default PlansSectionCartButton;
