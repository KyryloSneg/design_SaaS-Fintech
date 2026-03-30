import TonsOfFeaturesSection from "./TonsOfFeaturesSection";
import TonsOfUsersIllustration from "./TonsOfUsersIllustration";

const TonsOfFeaturesAndUsersSection = () => {
  return (
    <div className="mb-46 grid grid-cols-[1fr] justify-center justify-items-center gap-2 pr-[11.1%] pl-[9.375%] tons-of-features-row:grid-cols-[1fr_1fr] tons-of-features-row:gap-45">
      <TonsOfUsersIllustration />
      <TonsOfFeaturesSection />
    </div>
  );
};

export default TonsOfFeaturesAndUsersSection;
