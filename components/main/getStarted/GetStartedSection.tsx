import GetStartedSectionButton from "./GetStartedSectionButton";

const GetStartedSection = () => {
  return (
    <section className="relative mr-[9.51%] mb-39.5 ml-[9.23%] flex flex-col items-center justify-center gap-10.25 rounded-[1rem] bg-primary px-[7.5%] py-15 pt-18 min-[36rem]:px-[10%] min-[36rem]:py-18 min-[49.5rem]:py-25 min-[49.5rem]:pr-[15.14%] min-[49.5rem]:pl-[13.125%]">
      <h2 className="z-1 mt-2 w-full max-w-44 text-center text-16 leading-[1.09] tracking-[-0.03em] text-primary-foreground min-[22rem]:max-w-56 min-[22rem]:text-20 xs:max-w-67 xs:text-26 min-[33.25rem]:max-w-85 min-[33.25rem]:text-33 md:max-w-103 md:text-40 min-[57rem]:max-w-120 min-[57rem]:text-46 min-[69rem]:max-w-190.75 min-[69rem]:text-56">
        Discover a better way to manage purchases.
      </h2>
      <GetStartedSectionButton />
      <img
        src="/square-dots.svg"
        alt=""
        width={148}
        height={148}
        draggable="false"
        className="absolute top-5 left-[7.5%] z-2 size-[86px] min-[22rem]:top-7 xs:top-9 min-[33.25rem]:top-13 min-[39rem]:left-[12.6%] min-[42.5rem]:top-6 min-[42.5rem]:size-[148px] md:top-8 min-[49.5rem]:top-14.5"
        loading="lazy"
      />
      <img
        alt=""
        src="/horizontal-zig-zag.svg"
        width={105}
        height={17}
        draggable="false"
        className="absolute top-[11.2%] right-8 min-[33.25rem]:right-32.75"
        loading="lazy"
      />
      <img
        alt=""
        src="/vertical-zig-zag.svg"
        width={16}
        height={101}
        draggable="false"
        className="absolute bottom-[10%] left-5 min-[24rem]:left-8 min-[30rem]:left-11 min-[33.25rem]:left-16.25"
        loading="lazy"
      />
    </section>
  );
};

export default GetStartedSection;
