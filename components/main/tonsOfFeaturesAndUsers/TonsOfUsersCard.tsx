import Avatar from "@/components/ui/custom/avatar";
import { UILink } from "@/components/ui/custom/link";
import Image from "next/image";

interface UserItem {
  logoSrc: string;
  name: string;
  role: string;
}

const usersData: UserItem[] = [
  {
    logoSrc: "/eleanor-pena.webp",
    name: "Eleanor Pena",
    role: "Mentor of Web Design",
  },
  {
    logoSrc: "/albert-flores.webp",
    name: "Albert Flores",
    role: "Mentor of Web Design",
  },
  {
    logoSrc: "/wade-warren.webp",
    name: "Wade Warren",
    role: "Mentor of UI/UX",
  },
];

const TonsOfUsersCard = () => {
  return (
    <section
      className="absolute top-58.25 left-44 z-2 w-full max-w-65.5 rounded-(--rounded) bg-card px-6.5 pt-5.75 pb-4.5 2xs:left-58.25"
      style={{ "--rounded": "0.75rem" } as React.CSSProperties}
    >
      <h3 className="mb-6.5 text-18 font-extrabold text-foreground-header-secondary">
        100k+ Verified Users
      </h3>
      <ul className="mb-7.5 flex flex-col gap-4.5">
        {usersData.map(item => (
          <li key={item.name}>
            <section className="flex items-center gap-3.25">
              <Avatar src={item.logoSrc} width={38} height={38} />
              <div className="flex flex-col gap-1">
                <h4 className="text-14 leading-[1.4] font-extrabold text-foreground-header-secondary">
                  {item.name}
                </h4>
                <p className="text-9 leading-[1.45] text-foreground-secondary-subtle">
                  {item.role}
                </p>
              </div>
            </section>
          </li>
        ))}
      </ul>
      <UILink
        variant="destruction"
        href="#"
        className="flex items-center justify-start gap-3.5 font-tertiary leading-[1.65]"
      >
        See More
        <img
          src="/icons/arrow-right.svg"
          alt=""
          width={13}
          height={8}
          loading="lazy"
        />
      </UILink>
      <Image
        src="/highlight-green.webp"
        alt=""
        draggable="false"
        width={67}
        height={73}
        quality={100}
        className="absolute -bottom-12.5 -left-15 z-[-1] h-[73px] w-[67px] -rotate-90"
      />
      <div className="pointer-events-none absolute inset-0 -bottom-3.5 z-[-1] rounded-(--rounded) bg-card-foreground opacity-5 blur-[3.8125rem]" />
    </section>
  );
};

export default TonsOfUsersCard;
