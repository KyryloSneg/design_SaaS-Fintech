"use client";

import ClientReviewsSectionCarouselContent from "./ClientReviewsSectionCarouselContent";

import type { ClientReviewsSectionCarouselContentProps } from "./ClientReviewsSectionCarouselContent";
import type { OmittedCarouselSpecificFields } from "./shared";
import useCarousel, { type UseCarouselOptions } from "@/hooks/useCarousel";

const loopingCarouselItem: Omit<
  ClientReviewsSectionCarouselContentProps,
  OmittedCarouselSpecificFields
> = {
  imageWithControlProps: {
    imageProps: {
      src: "/testimonials-client.webp",
      alt: "",
      draggable: "false",
      width: 396,
      height: 539,
      className:
        "aspect-[396/539] w-full max-w-[160px] 2xs:max-w-[190px] 2sm:max-w-[230px] reviews-carousel-row:max-w-[396px]",
      loading: "eager",
    },
  },
  quoteProps: {
    quote:
      "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.",
    author: {
      name: "AR Shakir",
      companyRole: "CEO GetNextDesign",
      companyLogo: (
        <img
          src="/segment-gray.webp"
          alt="Segment"
          draggable="false"
          width={137}
          height={28}
          className="text-12 select-none"
        />
      ),
    },
  },
};

type CarouselItem = Omit<
  ClientReviewsSectionCarouselContentProps,
  OmittedCarouselSpecificFields
>;

const carouselData: CarouselItem[] = [
  loopingCarouselItem,
  loopingCarouselItem,
  loopingCarouselItem,
  loopingCarouselItem,
  loopingCarouselItem,
];

const carouselOptions: UseCarouselOptions = { isLoop: true };

const ClientReviewsSectionCarousel = () => {
  const {
    selectedIndex,
    selectedItem,
    next,
    prev,
    canSelectNext,
    canSelectPrev,
  } = useCarousel<CarouselItem>(carouselData, carouselOptions);

  return (
    <ClientReviewsSectionCarouselContent
      selectedIndex={selectedIndex}
      next={next}
      prev={prev}
      canSelectNext={canSelectNext}
      canSelectPrev={canSelectPrev}
      imageWithControlProps={selectedItem.imageWithControlProps}
      quoteProps={selectedItem.quoteProps}
    />
  );
};

export default ClientReviewsSectionCarousel;
