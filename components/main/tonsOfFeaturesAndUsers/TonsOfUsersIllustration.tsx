import Image from "next/image";
import TonsOfUsersCard from "./TonsOfUsersCard";

const TonsOfUsersIllustration = () => {
  return (
    <div className="relative -mt-30.5 -mb-20 h-max scale-50 pl-1.5 2xs:pl-6.25 min-[27.5rem]:-mt-24.5 min-[27.5rem]:-mb-10 min-[27.5rem]:scale-60 min-[29rem]:-mt-18.5 min-[29rem]:mb-0 min-[29rem]:scale-70 tons-of-features-row:mt-0 tons-of-features-row:scale-100">
      <div className="h-120 w-[95vw] max-w-100 rounded-[1.25rem] bg-tertiary-subtle 2xs:w-[90vw] min-[27.5rem]:w-[95vw] 2sm:w-screen" />
      <Image
        src="/tons-of-features-human.webp"
        alt=""
        draggable="false"
        width={332}
        height={560}
        quality={100}
        className="absolute bottom-0 left-0 z-1 h-[560px] w-[332px]"
        loading="eager"
      />
      <Image
        src="/brush-particles-2.webp"
        alt=""
        draggable="false"
        width={119}
        height={103}
        quality={100}
        className="absolute -top-4.75 -right-4.25 h-[103px] w-[119px]"
      />
      <TonsOfUsersCard />
    </div>
  );
};

export default TonsOfUsersIllustration;
