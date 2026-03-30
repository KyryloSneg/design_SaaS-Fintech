"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/shadcn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-[0.625rem] rounded-[999rem] border border-transparent bg-clip-padding font-semibold whitespace-nowrap cursor-pointer transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/80 shadow-[0_2.375rem_3.125rem_0_#05796b33]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        outlineGhost:
          "border-border hover:text-foreground-secondary aria-expanded:text-foreground-secondary shadow-[0_1.25rem_5rem_0_#055eff0d]",
        defaultContrast:
          "bg-background text-foreground hover:bg-background/80 aria-expanded:bg-background/80 shadow-[0_3rem_5rem_0_#00000066]",
        icon: "bg-background text-foreground shadow-[0_0.875rem_0.875rem_0_#0000001a]",
      },
      size: {
        default: "h-13.75 text-18 px-11.75 pt-4 pb-3.5",
        lg: "h-14.25 text-18 px-8 py-4",
        xs: "h-13 text-14 px-8.75 pt-4.25 pb-4",
        sm: "h-13.25 text-16 px-8 pt-4.5 pb-4",
        icon: "size-11.5 [&_svg:not([class*='size-'])]:size-4 [&_img:not([class*='size-'])]:size-4",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg":
          "size-15 [&_svg:not([class*='size-'])]:size-4 [&_img:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
