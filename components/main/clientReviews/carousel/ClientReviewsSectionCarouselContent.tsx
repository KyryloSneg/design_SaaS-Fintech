import ClientReviewsSectionCarouselItemImageWithControls from "./ClientReviewsSectionCarouselItemImageWithControls";
import ClientReviewsSectionCarouselItemQuote from "./ClientReviewsSectionCarouselItemQuote";

import type { ClientReviewsSectionCarouselItemImageWithControlsProps } from "./ClientReviewsSectionCarouselItemImageWithControls";
import type { ClientReviewsSectionCarouselItemQuoteProps } from "./ClientReviewsSectionCarouselItemQuote";
import type { Next, Prev } from "@/hooks/useCarousel";
import type { OmittedCarouselSpecificFields } from "./shared";

export interface ClientReviewsSectionCarouselContentProps {
  selectedIndex: number;
  next: Next;
  prev: Prev;
  canSelectNext: boolean;
  canSelectPrev: boolean;
  imageWithControlProps: Omit<
    ClientReviewsSectionCarouselItemImageWithControlsProps,
    OmittedCarouselSpecificFields
  >;
  quoteProps: Omit<ClientReviewsSectionCarouselItemQuoteProps, "selectedIndex">;
}

const ClientReviewsSectionCarouselContent = ({
  selectedIndex,
  next,
  prev,
  canSelectNext,
  canSelectPrev,
  imageWithControlProps,
  quoteProps,
}: ClientReviewsSectionCarouselContentProps) => {
  return (
    <div
      className="flex flex-col items-center gap-12 reviews-carousel-row:flex-row reviews-carousel-row:items-start reviews-carousel-row:justify-center reviews-carousel-row:gap-24 xl:gap-43"
      role="region"
      aria-roledescription="Reviews carousel"
      onKeyDown={e => {
        if (e.key === "ArrowRight") {
          next();

          const nextButton: HTMLButtonElement | null =
            e.currentTarget.querySelector("[data-next-button='true']");

          nextButton?.focus?.();
        }

        if (e.key === "ArrowLeft") {
          prev();

          const prevButton: HTMLButtonElement | null =
            e.currentTarget.querySelector("[data-prev-button='true']");

          prevButton?.focus?.();
        }
      }}
    >
      <ClientReviewsSectionCarouselItemImageWithControls
        {...imageWithControlProps}
        selectedIndex={selectedIndex}
        next={next}
        prev={prev}
        canSelectNext={canSelectNext}
        canSelectPrev={canSelectPrev}
      />
      <ClientReviewsSectionCarouselItemQuote
        {...quoteProps}
        selectedIndex={selectedIndex}
      />
    </div>
  );
};

export default ClientReviewsSectionCarouselContent;
