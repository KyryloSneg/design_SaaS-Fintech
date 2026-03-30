const HeroSectionIllustrationTask = ({
  avatar,
  title,
  description,
  additionalInfo,
}: {
  avatar: React.ReactNode;
  title: string;
  description: string;
  additionalInfo: React.ReactNode;
}) => {
  return (
    <section className="grid w-full grid-cols-[auto_auto] items-center justify-between rounded-[5rem] bg-card p-4 pr-10 shadow-[0_0.5rem_5rem_0_#92929252]">
      <div className="flex gap-4">
        {avatar}
        <div
          className="flex flex-col gap-1"
          data-slot="heading-with-description"
        >
          <h3 className="text-18-tighter font-semibold text-foreground-header">
            {title}
          </h3>
          <span className="text-12-tighter text-foreground-subheader">
            {description}
          </span>
        </div>
      </div>
      {additionalInfo}
    </section>
  );
};

export default HeroSectionIllustrationTask;
