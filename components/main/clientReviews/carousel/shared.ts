import type { Variants, Transition, TargetAndTransition } from "motion";

export type OmittedCarouselSpecificFields =
  | "selectedIndex"
  | "next"
  | "prev"
  | "canSelectNext"
  | "canSelectPrev";

const initialCarouselItemAnimationYModule = "-0.5rem";
export const carouselItemAnimationInitial: TargetAndTransition = {
  opacity: 0,
  y: initialCarouselItemAnimationYModule,
};

export const carouselItemAnimationAnimate: TargetAndTransition = {
  opacity: 1,
  y: 0,
};

export const carouselItemAnimationExit: TargetAndTransition = {
  opacity: 0,
  y: initialCarouselItemAnimationYModule,
};

export const carouselItemAnimationVariants: Variants = {
  initial: carouselItemAnimationInitial,
  animate: carouselItemAnimationAnimate,
  exit: carouselItemAnimationExit,
};

export const carouselItemAnimationTransition: Transition = {
  duration: 0.35,
  ease: "easeInOut",
};
