import { cn } from "@/utils/shadcn";
import { Button } from "@/components/ui/shadcn/button";

import type { Next, Prev } from "@/hooks/useCarousel";

export interface ClientReviewsSectionCarouselItemImageWithControlsProps {
  next: Next;
  prev: Prev;
  canSelectNext: boolean;
  canSelectPrev: boolean;
}

const carouselPreviousNextButtonBaseClassName =
  "absolute bottom-[45.5%] rounded-full z-1";

const ClientReviewsSectionCarouselItemControls = ({
  next,
  prev,
  canSelectPrev,
  canSelectNext,
}: ClientReviewsSectionCarouselItemImageWithControlsProps) => {
  return (
    <>
      <Button
        variant="icon"
        size="icon-lg"
        disabled={!canSelectPrev}
        className={cn("-left-7.75", carouselPreviousNextButtonBaseClassName)}
        onClick={prev}
        data-prev-button="true"
      >
        <img
          src="/icons/chevron-left.svg"
          alt=""
          draggable="false"
          className="select-none"
        />
        <span className="sr-only">Previous review</span>
      </Button>
      <Button
        variant="icon"
        size="icon-lg"
        disabled={!canSelectNext}
        className={cn(
          "-right-7 self-center",
          carouselPreviousNextButtonBaseClassName,
        )}
        onClick={next}
        data-next-button="true"
      >
        <img
          src="/icons/chevron-right.svg"
          alt=""
          draggable="false"
          className="select-none"
        />
        <span className="sr-only">Next review</span>
      </Button>
    </>
  );
};

export default ClientReviewsSectionCarouselItemControls;
