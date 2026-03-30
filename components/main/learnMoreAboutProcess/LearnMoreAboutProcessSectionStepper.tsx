import LearnMoreAboutProcessSectionStep, {
  LearnMoreAboutProcessSectionStepProps,
} from "./LearnMoreAboutProcessSectionStep";
import { OptionalField } from "@/utils/ts-util-types";
import LearnMoreAboutProcessSectionStepLogo from "./LearnMoreAboutProcessSectionStepLogo";

type LearnMoreAboutProcessSectionStepPropsWithOptionalStep = OptionalField<
  LearnMoreAboutProcessSectionStepProps,
  "step"
>;

const stepsData: LearnMoreAboutProcessSectionStepPropsWithOptionalStep[] = [
  {
    logo: (
      <LearnMoreAboutProcessSectionStepLogo
        src="/icons/profile-circle.svg"
        isShadow={true}
      />
    ),
    title: "Register",
    description:
      "It more shed went up is roof if loud case. Delay music in lived noise an.",
    isStepWithShadow: true,
    isStepWithSpacer: true,
  },
  {
    logo: (
      <LearnMoreAboutProcessSectionStepLogo
        src="/icons/settings.svg"
        isDashedBorder={true}
      />
    ),
    title: "Complete Setup",
    description:
      "Beyond genius really enough passed is up. ‍Up maids me an ample stood given.",
    isStepWithSpacer: true,
  },
  {
    logo: (
      <LearnMoreAboutProcessSectionStepLogo
        src="/icons/flash.svg"
        isDashedBorder={true}
      />
    ),
    title: "Utilize App",
    description:
      "Certainty say suffering his him collected intention promotion. Hill sold ham men.",
  },
];

const LearnMoreAboutProcessSectionStepper = () => {
  return (
    <div className="relative">
      <ol
        className="grid grid-cols-[1fr] justify-center gap-20 learn-process-stepper-row:grid-cols-[1fr_1fr_1fr]"
        aria-label="Steps to get started"
      >
        {stepsData.map((item, i) => (
          <li key={item.title}>
            <LearnMoreAboutProcessSectionStep {...item} step={i + 1} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default LearnMoreAboutProcessSectionStepper;
