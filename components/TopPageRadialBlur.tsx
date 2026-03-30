const TopPageRadialBlur = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-[-2] flex overflow-hidden">
      <div className="absolute -top-47 right-[-13%] aspect-square size-72 rounded-full bg-[rgba(73,164,248,0.125)] blur-(--overlay-gradient-blur) mobile-s:size-80 xs:size-92 min-[38.75rem]:size-104 md:size-120 lg:size-146 xl:size-162 hero-section-row:size-204" />
    </div>
  );
};

export default TopPageRadialBlur;
