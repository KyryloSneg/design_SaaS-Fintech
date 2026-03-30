import { cn } from "@/utils/shadcn";

const LearnMoreAboutProcessSectionStepLogo = ({
  src,
  isShadow = false,
  isDashedBorder = false,
}: {
  src: string;
  isShadow?: boolean;
  isDashedBorder?: boolean;
}) => {
  return (
    <div
      className={cn(
        "aspect-square size-[--learn-step-logo-size] rounded-full bg-background p-10",
        isShadow && "shadow-[0.375rem_0.5rem_5rem_0_#94949429]",
        isDashedBorder && "outline-1 outline-border-secondary outline-dashed",
      )}
    >
      <img
        src={src}
        alt=""
        draggable="false"
        loading="eager"
        width={80}
        height={80}
      />
    </div>
  );
};

export default LearnMoreAboutProcessSectionStepLogo;
