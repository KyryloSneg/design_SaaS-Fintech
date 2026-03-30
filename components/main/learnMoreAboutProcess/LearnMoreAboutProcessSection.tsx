import LearnMoreAboutProcessSectionStepper from "./LearnMoreAboutProcessSectionStepper";

const LearnMoreAboutProcessSection = () => {
  return (
    <section className="top-2 mb-40.5 flex flex-col items-center px-[11.1%] pt-2">
      <img
        src="/birds.webp"
        alt=""
        className="relative right-2.75 mb-3.75 h-[63px] w-[70px]"
        loading="lazy"
      />
      <div className="mb-[calc(2.875rem+var(--learn-step-index-size)/2)] flex flex-col items-center gap-3.5">
        <h2 className="text-center text-33 leading-[1.2] font-extrabold tracking-[-0.03em] text-balance sm:text-40 sm:text-wrap">
          Learn More About Process
        </h2>
        <p className="w-full text-center text-16-tight leading-[1.75] text-foreground-secondary min-[22rem]:max-w-109 min-[22rem]:text-18-tight sm:max-w-125 sm:text-20-tight">
          Was are delightful solicitude discovered collecting man day. Resolving
          neglected sir tolerably.
        </p>
      </div>
      <LearnMoreAboutProcessSectionStepper />
    </section>
  );
};

export default LearnMoreAboutProcessSection;
