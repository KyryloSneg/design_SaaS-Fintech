import { cn } from "@/utils/shadcn";
import HeroSectionMainContent from "./content/HeroSectionMainContent";
import HeroSectionIllustration from "./illustration/HeroSectionIllustration";

const mbClassName = "mb-(--col-mb) hero-section-row:mb-(--row-mb)";
const gapClassName =
  "gap-(--transformed-illustration-gap) md:gap-(--col-gap) hero-section-row:gap-(--row-gap)";

const HeroSection = () => {
  return (
    <div
      className={cn(
        "mr-(--base-ml) ml-(--base-ml) flex flex-col items-center hero-section-row:mr-[13.68%] hero-section-row:flex-row hero-section-row:items-start hero-section-row:justify-between hero-section-center:mr-(--base-ml) hero-section-center:justify-center",
        mbClassName,
        gapClassName,
      )}
      style={
        {
          "--base-ml": "9.3%",
          "--base-mb": "8.875rem",
          "--col-mb":
            "calc(var(--base-mb) - var(--hero-section-illustration-tasks-top))",
          "--row-mb": "var(--base-mb)",
          "--transformed-illustration-gap": "var(--row-gap)",
          "--col-gap": "7.5rem",
          "--row-gap": "3.4375rem",
        } as React.CSSProperties
      }
    >
      <HeroSectionMainContent />
      <HeroSectionIllustration />
    </div>
  );
};

export default HeroSection;
