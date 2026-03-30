export interface HeroSectionMainContentStatSectionProps {
  title: string;
  text: string;
}

const HeroSectionMainContentStatSection = ({
  title,
  text,
}: HeroSectionMainContentStatSectionProps) => {
  return (
    <section className="flex w-full max-w-70 flex-col items-center gap-px **:text-center sm:max-w-57.75 sm:items-start sm:**:text-start">
      <h3 className="text-center text-22-tighter leading-loose font-bold text-foreground-header xs:text-26-tighter">
        {title}
      </h3>
      <p className="font-secondary text-14-tighter leading-[1.6] text-balance text-foreground-subheader xs:text-16-tighter hero-section-row:text-wrap">
        {text}
      </p>
    </section>
  );
};

export default HeroSectionMainContentStatSection;
