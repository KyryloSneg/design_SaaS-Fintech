import PlansSectionCard, { PlansSectionCardProps } from "./PlansSectionCard";

const cardsData: PlansSectionCardProps[] = [
  {
    name: "BASIC PLAN",
    price: 0,
    description:
      "Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured.",
    featureItems: [
      {
        name: "Customer Support",
        value: true,
      },
      {
        name: "Free User Account",
        value: true,
      },
      {
        name: "Monthly Reports",
        value: false,
      },
      {
        name: "Multiple Devices",
        value: false,
      },
    ],
    buttonProps: { text: "Join for free", href: "#" },
  },
  {
    variant: "primary",
    name: "PREMIUM PLAN",
    price: 49,
    description:
      "On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe.",
    featureItems: [
      {
        name: "Customer Support",
        value: true,
      },
      {
        name: "Up to 10 Users",
        value: true,
      },
      {
        name: "Monthly Reports",
        value: true,
      },
      {
        name: "Multiple Devices Supported",
        value: true,
      },
    ],
    buttonProps: { text: "Get the premium", href: "#" },
    isBestChoice: true,
  },
];

const PlansSectionCards = () => {
  return (
    <ul className="flex flex-col justify-center gap-8 plans-list-row:flex-row">
      {cardsData.map(item => (
        <li key={item.name}>
          <PlansSectionCard {...item} />
        </li>
      ))}
    </ul>
  );
};

export default PlansSectionCards;
