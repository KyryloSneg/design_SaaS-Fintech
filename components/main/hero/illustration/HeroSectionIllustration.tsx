import HeroSectionIllustrationChart from "./chart/HeroSectionIllustrationChart";
import HeroSectionIllustrationCard from "./HeroSectionIllustrationCard";
import HeroSectionIllustrationTasks from "./tasks/HeroSectionIllustrationTasks";

const HeroSectionIllustration = () => {
  return (
    <div
      className="pointer-events-none relative bottom-(--hero-section-illustration-bottom) z-[-1] -my-44 -mb-76 scale-[0.4] mobile-s:-my-38 mobile-s:-mb-68 mobile-s:scale-[0.45] xs:-my-24 xs:-mb-50 xs:scale-[0.6] hero-section-illustration-scale07:-my-14 hero-section-illustration-scale07:-mb-36 hero-section-illustration-scale07:scale-[0.7] sm:mt-4 sm:-mb-24 sm:scale-[0.85] md:my-0 md:scale-[1]"
      aria-hidden="true"
    >
      <HeroSectionIllustrationCard />
      <HeroSectionIllustrationTasks />
      <HeroSectionIllustrationChart />
    </div>
  );
};

export default HeroSectionIllustration;
