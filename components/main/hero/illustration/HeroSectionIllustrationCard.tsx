import Image from "next/image";

const HeroSectionIllustrationCard = () => {
  return (
    <div className="relative h-125.25 w-102 rounded-[1rem] bg-card-secondary">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/hero-waves.svg"
          alt=""
          draggable="false"
          width={408}
          height={467}
          className="relative top-8.75"
        />
      </div>
      <Image
        src="/hand-with-money.webp"
        alt=""
        width={295}
        height={653}
        draggable="false"
        className="relative bottom-14 left-18.5"
        loading="eager"
        quality={100}
      />
      <Image
        src="/highlight.webp"
        alt=""
        width={149}
        height={91}
        draggable="false"
        quality={100}
        className="absolute top-[calc(100%-2rem)] -left-30.5 h-[91px] w-[149px] rotate-45"
      />
      <Image
        src="/brush-particles.webp"
        alt=""
        width={101}
        height={126}
        draggable="false"
        quality={100}
        className="absolute bottom-100 left-90 h-[126px] w-[101px]"
      />
    </div>
  );
};

export default HeroSectionIllustrationCard;
