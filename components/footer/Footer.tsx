import { Separator } from "@/components/ui/shadcn/separator";
import FooterCopyright from "./FooterCopyright";
import FooterMainContent from "./FooterMainContent";

const Footer = () => {
  return (
    <footer className="relative flex flex-col px-[9.1%] pb-13">
      <FooterMainContent />
      <Separator className="bg-separator-secondary" />
      <FooterCopyright />
      <div className="pointer-events-none absolute inset-0 top-[25%] flex justify-center overflow-hidden">
        <div className="absolute h-[200%] w-[110%] translate-x-5 translate-y-[28%] rotate-[-1.25deg] rounded-[50%] bg-[rgba(73,164,248,0.135)] blur-(--overlay-gradient-blur) footer-nav-full-col:translate-y-[22%] footer-nav-address-row:translate-y-[12%]" />
      </div>
    </footer>
  );
};

export default Footer;
