import PlansSectionCards from "./cards/PlansSectionCards";

const PlansSection = () => {
  return (
    <section className="relative mb-39 flex flex-col items-center gap-12 px-[11.1%] sm:gap-14.75">
      <div className="flex flex-col items-center gap-8 **:text-center">
        <h2 className="w-full text-30 leading-[1.2] font-extrabold tracking-[-0.03em] text-balance 2xs:text-33 min-[33.25rem]:max-w-102 min-[33.25rem]:text-wrap sm:max-w-122 sm:text-40 md:max-w-163.75 md:text-46">
          Start today, with free or premium plan, you choose
        </h2>
        <p className="w-full text-16-tight leading-[1.75] text-balance text-foreground-secondary sm:max-w-140.25 sm:text-20-tight sm:text-wrap">
          With lots of unique and useful features, you can easily manage your
          wallet easily without any problem.
        </p>
      </div>
      <PlansSectionCards />
      <div className="absolute top-0 right-0 bottom-0 -left-5 z-[-1] overflow-hidden pt-[30%] plans-list-row:top-auto plans-list-row:-bottom-18.75 plans-list-row:left-0">
        <img
          src="/plans-waves.svg"
          alt=""
          draggable="false"
          className="max-w-none scale-125 -rotate-[12.5deg] plans-list-row:scale-100 plans-list-row:rotate-0"
        />
      </div>
    </section>
  );
};

export default PlansSection;
