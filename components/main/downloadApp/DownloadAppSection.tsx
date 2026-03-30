import DownloadAppSectionButtonGroup from "./DownloadAppSectionButtonGroup";

const DownloadAppSection = () => {
  return (
    <section className="mb-47.5 flex flex-col items-center px-[10%] **:text-center min-[51rem]:pr-[25.7%] min-[51rem]:pl-[25.625%]">
      <p className="mb-5 font-secondary-heading text-12 leading-tight font-bold text-secondary min-[51rem]:text-14">
        Project Management App
      </p>
      <h2 className="mb-5.75 w-full text-22 leading-[1.2] font-extrabold tracking-[-0.03em] text-balance min-[22rem]:text-26 min-[32rem]:text-wrap min-[33.5rem]:max-w-md min-[65rem]:max-w-142 min-[65rem]:text-33 min-[78rem]:max-w-175.25 min-[78rem]:text-40">
        Download our app and start your free trial to get started today!
      </h2>
      <p className="mb-6 max-w-62 text-16-tight leading-[1.75] text-foreground-secondary min-[51rem]:max-w-100 min-[51rem]:text-20-tight min-[79rem]:max-w-none">
        End-to-end payments and financial management in a single solution.
      </p>
      <DownloadAppSectionButtonGroup />
    </section>
  );
};

export default DownloadAppSection;
