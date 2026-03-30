import { AnimatePresence } from "motion/react";
import Image, { ImageProps } from "next/image";
import * as m from "motion/react-m";
import ClientReviewsSectionCarouselItemControls from "./ClientReviewsSectionCarouselItemControls";
import {
  carouselItemAnimationTransition,
  carouselItemAnimationVariants,
} from "./shared";

import type { Next, Prev } from "@/hooks/useCarousel";

export interface ClientReviewsSectionCarouselItemImageWithControlsProps {
  imageProps: ImageProps;
  selectedIndex: number;
  next: Next;
  prev: Prev;
  canSelectNext: boolean;
  canSelectPrev: boolean;
}

const ClientReviewsSectionCarouselItemImageWithControls = ({
  imageProps,
  selectedIndex,
  next,
  prev,
  canSelectNext,
  canSelectPrev,
}: ClientReviewsSectionCarouselItemImageWithControlsProps) => {
  return (
    <div className="relative flex aspect-video w-full max-w-48 self-center justify-self-center rounded-[1rem] bg-tertiary 2xs:max-w-54 2sm:max-w-72 reviews-carousel-row:ml-10.5 reviews-carousel-row:aspect-402/479 reviews-carousel-row:max-w-100.5">
      <AnimatePresence mode="wait">
        <m.div
          key={selectedIndex}
          variants={carouselItemAnimationVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={carouselItemAnimationTransition}
          aria-live="polite"
          className="absolute right-0 bottom-0 left-0 justify-self-center motion-reduce:transform-none!"
        >
          <Image {...imageProps} quality={100} />
        </m.div>
      </AnimatePresence>
      <ClientReviewsSectionCarouselItemControls
        next={next}
        prev={prev}
        canSelectNext={canSelectNext}
        canSelectPrev={canSelectPrev}
      />
      <Image
        src="/highlight-green.webp"
        alt=""
        draggable="false"
        width={67}
        height={73}
        className="absolute -top-12.75 -left-10 h-[73px] w-[67px] scale-x-[-1] rotate-270"
        loading="lazy"
        quality={100}
      />
      <Image
        src="/highlight-green.webp"
        alt=""
        draggable="false"
        width={67}
        height={73}
        className="absolute -right-11 -bottom-13.5 h-[73px] w-[67px] scale-x-[-1] rotate-90"
        loading="lazy"
        quality={100}
      />
      <img
        src="/horizontal-zig-zag.svg"
        alt=""
        draggable="false"
        className="absolute -bottom-8.5 left-[24%] translate-y-full select-none"
        loading="lazy"
        width={126}
        height={20}
      />
      <img
        src="/square-dots.svg"
        alt=""
        draggable="false"
        className="absolute -top-10.75 -right-9.25 z-[-1] aspect-square select-none"
        loading="lazy"
        width={148}
        height={148}
      />
    </div>
  );
};

export default ClientReviewsSectionCarouselItemImageWithControls;
