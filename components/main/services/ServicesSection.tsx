import ServicesList from "./ServicesList";

const ServicesSection = () => {
  return (
    <section className="relative mb-30 flex flex-col items-center px-[9.375%]">
      <p className="mb-3.75 text-center font-secondary-heading text-12 font-bold min-[29rem]:text-14">
        Our Services
      </p>
      <h2 className="mb-9 w-full text-center text-20 leading-[1.3] font-extrabold tracking-[-0.03em] text-balance min-[24rem]:max-w-81 min-[24.5rem]:text-wrap min-[29rem]:max-w-97 min-[29rem]:text-24 min-[36rem]:mb-14 min-[36rem]:max-w-122 min-[36rem]:text-30 md:max-w-162 md:text-40">
        Save Time Managing Your Business With Our Best Services
      </h2>
      <ServicesList />
      <div className="absolute inset-0 z-[-1] overflow-hidden services-list-4col:-bottom-4">
        <img
          src="/services-waves.svg"
          alt=""
          draggable="false"
          className="relative top-[25%] right-[20%] my-auto max-w-none -translate-y-1/2 scale-125 -rotate-23 services-list-2col:top-[50%] services-list-2col:-rotate-[12.5deg] services-list-4col:-top-10 services-list-4col:right-0 services-list-4col:left-[41.2%] services-list-4col:translate-y-0 services-list-4col:scale-100 services-list-4col:rotate-0"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
