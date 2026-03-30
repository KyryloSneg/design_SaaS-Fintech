import GrowingBusiness, { GrowingBusinessProps } from "./GrowingBusiness";

const growingBusinessesData: GrowingBusinessProps[] = [
  {
    src: "/OpenZeppelin.webp",
    alt: "OpenZeppelin",
    width: 137,
    height: 21,
  },
  {
    src: "/Oracle.webp",
    alt: "Oracle",
    width: 137,
    height: 18,
  },
  {
    src: "/Morpheus.webp",
    alt: "Morpheus",
    width: 137,
    height: 28,
  },
  {
    src: "/Samsung.webp",
    alt: "SAMSUNG",
    width: 137,
    height: 21,
  },
  {
    src: "/Monday-com.webp",
    alt: "monday.com",
    width: 137,
    height: 25,
  },
  {
    src: "/Segment.webp",
    alt: "Segment",
    width: 137,
    height: 28,
  },
  {
    src: "/Protonet.webp",
    alt: "Protonet",
    width: 137,
    height: 32,
  },
];

const totalBusinessesHeight = growingBusinessesData.reduce(
  (acc, curr) => acc + curr.height,
  0,
);

const maxBusinessHeight = Math.max(
  ...growingBusinessesData.map(item => item.height),
);

const startOfItemsFromSecondRow = Math.ceil(growingBusinessesData.length / 2);
const maxFirstRowHeight = Math.max(
  ...growingBusinessesData
    .slice(0, startOfItemsFromSecondRow)
    .map(item => item.height),
);

const startOfItemsFromThirdRow = startOfItemsFromSecondRow + 2;
const maxSecondRowHeight = Math.max(
  ...growingBusinessesData
    .slice(startOfItemsFromSecondRow, startOfItemsFromThirdRow)
    .map(item => item.height),
);

const maxThirdRowHeight = Math.max(
  ...growingBusinessesData
    .slice(startOfItemsFromThirdRow)
    .map(item => item.height),
);

const GrowingBusinessesSection = () => {
  return (
    // -1 rounded px from mb that we take into account in the min-h below
    <section className="mr-[6.39%] mb-23.5 ml-[6.32%] flex flex-col items-center gap-9.75">
      <h3 className="max-w-64 text-center font-secondary-heading text-16 font-semibold 2xs:max-w-72 2xs:text-18 min-[37.5rem]:max-w-none min-[46rem]:text-22">
        Over 32k+ software businesses growing with AR Shakir
      </h3>
      <ul
        // using flex-wrap leads to layout shifts, so use grid with semi-adjustable min height calculations
        // (basically, calculate rows' tallest image's height + gaps + rounded pxs)
        className="grid min-h-(--col-min-h) w-full grid-cols-[1fr] items-center justify-center justify-items-center gap-(--col-gap) min-[33.75rem]:min-h-(--3-col-min-h) min-[33.75rem]:grid-cols-[1fr_1fr_1fr] sm:justify-between xl:min-h-(--row-min-h) xl:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] xl:gap-(--row-gap)"
        style={
          {
            "--row-gap": "1.25rem",
            "--row-min-h": `${(maxBusinessHeight + 1) / 16}rem`,
            "--col-min-h": `calc(${totalBusinessesHeight / 16}rem + calc(var(--col-gap) * ${growingBusinessesData.length - 1}) + 3px)`,
            "--col-gap": "2rem",
            "--3-col-min-h": `calc(${maxFirstRowHeight}px + ${maxSecondRowHeight}px + ${maxThirdRowHeight}px + calc(var(--col-gap) * 2) + 3px)`,
          } as React.CSSProperties
        }
      >
        {growingBusinessesData.map(item => (
          <li key={item.src}>
            <GrowingBusiness {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GrowingBusinessesSection;
