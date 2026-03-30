import HeroSectionIllustrationChartContainer from "./HeroSectionIllustrationChartContainer";

function HeroSectionIllustrationChart() {
  return (
    <section className="absolute top-82.25 left-58.5 flex w-68 flex-col gap-1.75 rounded-[0.625rem] bg-card pt-3.5 pr-5.5 pb-4.75 pl-4 shadow-[0_4.3125rem_3.4375rem_0_rgba(0,0,0,0.03),0_2.8125rem_2rem_0_rgba(0,0,0,0.0228),0_1.6875rem_1.125rem_0_rgba(0,0,0,0.0182),0_0.875rem_0.5625rem_0_rgba(0,0,0,0.015),0_0.375rem_0.3125rem_0_rgba(0,0,0,0.0118),0_0.0625rem_0.125rem_0_rgba(0,0,0,0.0072)]">
      <header className="flex flex-col gap-1.75">
        <h3 className="text-16 font-semibold text-card-foreground">
          Total Balance
        </h3>
        <div className="flex items-center gap-3.25 **:font-secondary-heading **:text-14">
          <span className="font-bold text-card-foreground">$4,200</span>
          <span className="font-semibold text-income">+14%</span>
        </div>
      </header>
      <HeroSectionIllustrationChartContainer />
    </section>
  );
}

export default HeroSectionIllustrationChart;
