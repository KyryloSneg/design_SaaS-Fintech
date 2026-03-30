import ClientReviewsSectionCarousel from "./carousel/ClientReviewsSectionCarousel";

const ClientReviewsSection = () => {
  return (
    <section className="mb-53 flex flex-col gap-9.5 px-[9.375%]">
      <div className="mb-32 flex flex-col items-center gap-4 **:text-center reviews-carousel-row:mb-24.5">
        <p className="font-secondary-heading text-14 font-bold text-separate-icon">
          Testimonials
        </p>
        <h2 className="max-w-62 text-30 leading-[1.3] tracking-[-0.03em] 2xs:max-w-68 2xs:text-33 sm:max-w-81 sm:text-40 min-[49rem]:max-w-none">
          Check what our clients are saying
        </h2>
      </div>
      <ClientReviewsSectionCarousel />
    </section>
  );
};

export default ClientReviewsSection;
