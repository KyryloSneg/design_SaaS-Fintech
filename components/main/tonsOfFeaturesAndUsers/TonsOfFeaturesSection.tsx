import TonsOfFeaturesSectionTryForFreeButton from "./TonsOfFeaturesSectionTryForFreeButton";

const TonsOfFeaturesSection = () => {
  return (
    <section className="flex w-full max-w-135 flex-col items-center gap-12 tons-of-features-row:items-start">
      <div className="flex w-full flex-col items-center gap-8 **:text-center tons-of-features-row:items-start tons-of-features-row:**:text-start">
        <h2 className="text-26 leading-[1.3] font-extrabold tracking-[-0.03em] text-balance xs:text-33 xl:max-w-[97%] xl:text-40 xl:text-wrap">
          My little garret repair to desire he esteem.
        </h2>
        <p className="max-w-[77%] text-14-tight leading-[1.75] text-pretty text-foreground-secondary min-[23rem]:text-16-tight xs:text-18-tight xl:text-20-tight">
          Just like we said before, we have tons of features that will helps you
          to manage you wallet. From income, outcome, montly usage, and etc.
        </p>
      </div>
      <TonsOfFeaturesSectionTryForFreeButton />
    </section>
  );
};

export default TonsOfFeaturesSection;
