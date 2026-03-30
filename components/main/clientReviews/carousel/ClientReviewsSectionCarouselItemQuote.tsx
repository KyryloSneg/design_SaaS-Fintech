import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import {
  carouselItemAnimationTransition,
  carouselItemAnimationVariants,
} from "./shared";

export interface ClientReviewsSectionCarouselItemQuoteAuthor {
  name: string;
  companyRole: string;
  companyLogo: React.ReactNode;
}

export interface ClientReviewsSectionCarouselItemQuoteProps {
  quote: string;
  author: ClientReviewsSectionCarouselItemQuoteAuthor;
  selectedIndex: number;
}

const ClientReviewsSectionCarouselItemQuote = ({
  quote,
  author,
  selectedIndex,
}: ClientReviewsSectionCarouselItemQuoteProps) => {
  return (
    <AnimatePresence mode="wait">
      <m.figure
        key={selectedIndex}
        className="mt-7.75 flex max-w-138.5 flex-col motion-reduce:transform-none!"
        variants={carouselItemAnimationVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={carouselItemAnimationTransition}
        aria-live="polite"
      >
        <div className="mb-5 flex flex-col gap-5">
          <img
            src="/icons/quote.svg"
            alt="Quote"
            draggable="false"
            width={31}
            height={27}
            loading="lazy"
            className="text-9"
          />
          <div className="flex" role="img" aria-label="5 stars">
            {[1, 2, 3, 4, 5].map(item => (
              <img
                key={item}
                src="/icons/star.svg"
                alt="Star"
                draggable="false"
                width={29}
                height={29}
                className="aspect-square text-9"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-11.75">
          <blockquote>
            <p className="2sm:text-24-tight text-20-tight leading-[1.3666] font-bold text-pretty sm:text-30-tight">
              {quote}
            </p>
          </blockquote>
          <figcaption className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col gap-px">
              <cite className="text-16 leading-normal font-bold tracking-[-0.03em] sm:text-20">
                {author.name}
              </cite>
              <span className="text-14-tight leading-normal text-foreground-secondary sm:text-16-tight">
                {author.companyRole}
              </span>
            </div>
            {author.companyLogo}
          </figcaption>
        </div>
      </m.figure>
    </AnimatePresence>
  );
};

export default ClientReviewsSectionCarouselItemQuote;
