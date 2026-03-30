import { Separator } from "@/components/ui/shadcn/separator";
import PlansSectionCardFeatureItem, {
  PlansSectionCardFeatureItemProps,
} from "./PlansSectionCardFeatureItem";
import type { CardVariant } from "./shared";
import { cn } from "@/utils/shadcn";
import PlansSectionCartButton, {
  PlansSectionCartButtonProps,
} from "./PlansSectionCartButton";

export interface PlansSectionCardProps {
  variant?: CardVariant;
  name: string;
  price: number;
  description: string;
  featureItems: Omit<PlansSectionCardFeatureItemProps, "variant">[];
  buttonProps: Omit<PlansSectionCartButtonProps, "variant">;
  isBestChoice?: boolean;
}

const PlansSectionCard = ({
  variant = "default",
  name,
  price,
  description,
  featureItems,
  buttonProps,
  isBestChoice = false,
}: PlansSectionCardProps) => {
  const featureItemsWithVariant: PlansSectionCardFeatureItemProps[] =
    featureItems.map(item => ({ ...item, variant }));

  return (
    <section
      className={cn(
        "relative flex w-full max-w-90.5 flex-col gap-8 rounded-[1rem] p-8",
        variant === "default" &&
          "bg-card shadow-[0_0.5rem_3.125rem_0_#a7a7a73d]",
        variant === "primary" &&
          `bg-primary shadow-[0_0.5rem_3.125rem_0_#05796b52] [&_*:not(button):not([role="button"])]:text-background!`,
      )}
    >
      <h3 className="font-main text-16 leading-[1.15] font-medium tracking-[0.06em] text-primary">
        {name}
      </h3>
      <p className="flex items-end gap-2">
        <span className="text-64 leading-[1.15] font-bold text-foreground-header">
          ${price}
        </span>
        <span className="pb-2.5 text-12-tighter leading-[1.15] font-bold text-foreground-subheader plan-card-full-text-size:text-16-tighter">
          Per month
        </span>
      </p>
      <p className="text-16-tighter leading-loose text-pretty text-foreground-subheader">
        {description}
      </p>
      <Separator
        className={cn(
          "h-px!",
          variant === "default" ? "bg-separator-tertiary" : "",
        )}
      />
      <dl className="flex flex-col items-start gap-4">
        {featureItemsWithVariant.map(item => (
          <PlansSectionCardFeatureItem key={item.name} {...item} />
        ))}
      </dl>
      <PlansSectionCartButton {...buttonProps} variant={variant} />
      {isBestChoice && (
        <span className="absolute -top-4.75 -right-6 rounded-[5rem] bg-foreground-header px-6 py-3 text-12-tighter text-background! xs:-top-6.25 xs:-right-9.25 xs:px-8 xs:py-4 xs:text-14-tighter">
          Best choice
        </span>
      )}
    </section>
  );
};

export default PlansSectionCard;
