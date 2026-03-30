import FooterAddress from "./FooterAddress";
import FooterAside from "./FooterAside";
import FooterNavigation from "./navigation/FooterNavigation";

const FooterMainContent = () => {
  return (
    <div className="grid grid-cols-[1fr] gap-x-8 gap-y-12 pb-14.75 footer-row:grid-cols-[auto_1fr] footer-row:justify-between">
      <FooterAside />
      <div className="grid grid-cols-[1fr] justify-between gap-13.25 footer-nav-address-row:grid-cols-[1fr_auto]">
        <FooterNavigation />
        <FooterAddress />
      </div>
    </div>
  );
};

export default FooterMainContent;
