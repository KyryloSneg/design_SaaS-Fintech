import ClientReviewsSection from "./clientReviews/ClientReviewsSection";
import DownloadAppSection from "./downloadApp/DownloadAppSection";
import GetStartedSection from "./getStarted/GetStartedSection";
import GrowingBusinessesSection from "./growingBusinesses/GrowingBusinessesSection";
import HeroSection from "./hero/HeroSection";
import LearnMoreAboutProcessSection from "./learnMoreAboutProcess/LearnMoreAboutProcessSection";
import PlansSection from "./plans/PlansSection";
import ServicesSection from "./services/ServicesSection";
import TonsOfFeaturesAndUsersSection from "./tonsOfFeaturesAndUsers/TonsOfFeaturesAndUsersSection";

const Main = () => {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <GrowingBusinessesSection />
      <ServicesSection />
      <LearnMoreAboutProcessSection />
      <DownloadAppSection />
      <TonsOfFeaturesAndUsersSection />
      <PlansSection />
      <ClientReviewsSection />
      <GetStartedSection />
    </main>
  );
};

export default Main;
