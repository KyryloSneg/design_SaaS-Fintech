import Avatar from "@/components/ui/custom/avatar";
import HeroSectionIllustrationTask from "./HeroSectionIllustrationTask";

const HeroSectionIllustrationTasks = () => {
  return (
    <ul className="relative top-(--hero-section-illustration-tasks-top) left-9.5 flex flex-col gap-4">
      <li className="w-full max-w-97.25">
        <HeroSectionIllustrationTask
          avatar={<Avatar src="/angela-taylor.webp" />}
          title="Angela Taylor"
          description="Completed task"
          additionalInfo={
            <span className="text-13 font-semibold text-success">
              12:54pm today
            </span>
          }
        />
      </li>
      <li className="relative left-20.25 w-full max-w-82.5">
        <HeroSectionIllustrationTask
          avatar={<Avatar src="/ar-shakir.webp" width={46} height={46} />}
          title="AR Shakir"
          description="Task Delayed"
          additionalInfo={
            <span className="text-13 font-semibold text-destructive-subtle">
              For 3 days
            </span>
          }
        />
      </li>
    </ul>
  );
};

export default HeroSectionIllustrationTasks;
