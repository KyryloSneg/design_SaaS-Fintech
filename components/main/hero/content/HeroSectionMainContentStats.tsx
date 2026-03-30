import HeroSectionMainContentStatSection, {
  HeroSectionMainContentStatSectionProps,
} from "./HeroSectionMainContentStatItem";

const heroSectionsData: HeroSectionMainContentStatSectionProps[] = [
  {
    title: "195k+ Users",
    text: "Delightful remarkably mr on announcing themselves entreaties favourable.",
  },
  {
    title: "$400m+ Saved",
    text: "About to in so terms voice at. Equal an would is found seems of and concluded.",
  },
];

const HeroSectionMainContentStats = () => {
  return (
    <ul className="flex flex-col items-center gap-9.25 sm:flex-row sm:justify-center sm:pl-12 min-[44rem]:pl-16 hero-section-row:items-start hero-section-row:justify-start hero-section-row:pl-0">
      {heroSectionsData.map(item => (
        <li key={item.title}>
          <HeroSectionMainContentStatSection {...item} />
        </li>
      ))}
    </ul>
  );
};

export default HeroSectionMainContentStats;
