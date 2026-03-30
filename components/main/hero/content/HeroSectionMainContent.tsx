import HeroSectionMainContentProductSolution from "./HeroSectionMainContentProductSolution";
import HeroSectionMainContentStats from "./HeroSectionMainContentStats";

const HeroSectionMainContent = () => {
  return (
    <div className="flex flex-col gap-13.75">
      <HeroSectionMainContentProductSolution />
      <HeroSectionMainContentStats />
    </div>
  );
};

export default HeroSectionMainContent;
