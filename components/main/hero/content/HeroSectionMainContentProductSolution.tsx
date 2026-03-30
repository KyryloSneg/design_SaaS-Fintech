import HeroSectionMainContentTryForFreeButton from "./HeroSectionMainContentTryForFreeButton";

const HeroSectionMainContentProductSolution = () => {
  return (
    <section className="flex flex-col items-center **:text-center hero-section-row:items-start hero-section-row:**:text-start">
      <p className="text-10 mb-1 font-secondary-heading leading-tight font-semibold xs:text-13 sm:text-16 md:text-22">
        Product Growth Solution in Single Platform.
      </p>
      <h2 className="mb-3 w-full text-26 leading-[1.33] font-extrabold tracking-[-0.03em] text-balance xs:text-33 sm:max-w-108 sm:text-46 sm:text-wrap md:max-w-208 md:text-60 hero-section-row:max-w-161.5">
        Managing business payments has never been easier
      </h2>
      <p className="mb-6 w-full text-13-tight leading-[1.75] text-balance text-foreground-secondary xs:mb-10.5 xs:text-14-tight sm:text-16-tight md:max-w-142.25 md:text-20-tight hero-section-row:text-wrap">
        Never at water me might. On formed merits hunted unable merely by mr
        whence or. Possession the unpleasing simplicity her uncommonly.
      </p>
      <HeroSectionMainContentTryForFreeButton />
    </section>
  );
};

export default HeroSectionMainContentProductSolution;
