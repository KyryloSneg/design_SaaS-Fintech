import { cn } from "@/utils/shadcn";

export interface LearnMoreAboutProcessSectionStepProps {
  step: number;
  logo: React.ReactNode;
  title: string;
  description: string;
  isStepWithShadow?: boolean;
  isStepWithSpacer?: boolean;
}

const spacerOneSrc = "/step-spacer-1.svg";
const spacerTwoSrc = "/step-spacer-2.svg";

const spacerBaseClassName = "absolute hidden learn-process-stepper-row:block";

const spacerBaseRightClassName =
  "-right-[48%] min-[59.375rem]:-right-[43%] min-[61.25rem]:-right-[40.5%] min-[63.75rem]:-right-[38%] min-[67.5rem]:-right-[32%] min-[72rem]:-right-[41%] min-[76rem]:-right-[37.5%] xl:-right-[34%] min-[85.5rem]:-right-29.5";

const spacerOneSizeClassName =
  "aspect-170/38 w-[90px] min-[72rem]:w-[130px] min-[85.5rem]:w-[170px] min-[85.5rem]:h-[38px]";

const spacerTwoSizeClassName =
  "aspect-152/26 w-[74px] min-[72rem]:w-[114px] min-[85.5rem]:w-[152px] min-[85.5rem]:h-[26px]";

const spacerOneClassName = cn(
  spacerBaseClassName,
  spacerBaseRightClassName,
  spacerOneSizeClassName,
  "top-[calc(var(--learn-step-logo-size)/2)]",
);

const spacerTwoClassName = cn(
  spacerBaseClassName,
  spacerBaseRightClassName,
  spacerTwoSizeClassName,
  "top-[calc(var(--learn-step-logo-size)/2-0.8125rem)] -right-[45%]", // override right
);

const LearnMoreAboutProcessSectionStep = ({
  step,
  logo,
  title,
  description,
  isStepWithShadow = false,
  isStepWithSpacer = false,
}: LearnMoreAboutProcessSectionStepProps) => {
  const spacerSrc = step % 2 === 0 ? spacerTwoSrc : spacerOneSrc;
  const spacerClassName =
    step % 2 === 0 ? spacerTwoClassName : spacerOneClassName;

  return (
    <section className="relative flex w-full max-w-80 flex-col items-center gap-13.5">
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute mr-(--learn-step-logo-size) flex aspect-square size-(--learn-step-index-size) items-center justify-center rounded-full bg-[#f6f6f7] font-secondary text-18-tighter leading-[1.15] font-bold",
          // lower the "blur" value by 0.25rem compared to the original design (it looks more similar somehow)
          isStepWithShadow && "shadow-[0.5rem_0.5rem_4.75rem_0_#a7a7a7cc]",
        )}
        style={{
          top: "calc(var(--learn-step-index-size) / 2 * -1)",
        }}
      >
        {step}
      </span>
      {logo}
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-center text-24-tighter leading-[1.15] font-semibold text-foreground-header">
          {title}
        </h3>
        <p className="text-center text-16-tight leading-loose text-foreground-secondary learn-process-stepper-row:text-balance lg:text-wrap">
          {description}
        </p>
      </div>
      {isStepWithSpacer && (
        <img
          src={spacerSrc}
          alt=""
          draggable="false"
          className={spacerClassName}
          loading="lazy"
        />
      )}
    </section>
  );
};

export default LearnMoreAboutProcessSectionStep;
