import { cn } from "@/utils/shadcn";
import PlansSectionCardFeatureValueIcon from "./PlansSectionCardFeatureValueIcon";
import type { CardVariant } from "./shared";
import { defaultCardVariant } from "./shared";

export interface PlansSectionCardFeatureItemProps {
  name: string;
  value: boolean;
  variant?: CardVariant;
}

const PlansSectionCardFeatureItem = ({
  name,
  value,
  variant = defaultCardVariant,
}: PlansSectionCardFeatureItemProps) => {
  const baseSrc = value ? "check-circle" : "cross-circle";
  const src = `/icons/${baseSrc}${value ? `-${variant === "default" ? "green" : "white"}` : ""}.svg`;

  return (
    <div
      className={cn(
        "flex flex-row-reverse items-center gap-5",
        !value && "opacity-64",
      )}
    >
      <dt className="text-14-tighter leading-loose text-foreground-subheader plan-card-full-text-size:text-16-tighter">
        {name}
      </dt>
      <dd>
        <PlansSectionCardFeatureValueIcon src={src} value={value} />
      </dd>
    </div>
  );
};

export default PlansSectionCardFeatureItem;
