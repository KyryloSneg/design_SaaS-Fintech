import GrowingBusiness, { GrowingBusinessProps } from "./GrowingBusiness";

const growingBusinessesData: GrowingBusinessProps[] = [
  {
    src: "/OpenZeppelin.webp",
    alt: "OpenZeppelin",
  },
  {
    src: "/Oracle.webp",
    alt: "Oracle",
  },
  {
    src: "/Morpheus.webp",
    alt: "Morpheus",
  },
  {
    src: "/Samsung.webp",
    alt: "SAMSUNG",
  },
  {
    src: "/Monday-com.webp",
    alt: "monday.com",
  },
  {
    src: "/Segment.webp",
    alt: "Segment",
  },
  {
    src: "/Protonet.webp",
    alt: "Protonet",
  },
];

const GrowingBusinessesSection = () => {
  return (
    <section className="mr-[6.39%] mb-23.75 ml-[6.32%] flex flex-col items-center gap-9.75">
      <h3 className="max-w-64 text-center font-secondary-heading text-16 font-semibold 2xs:max-w-72 2xs:text-18 min-[37.5rem]:max-w-none min-[46rem]:text-22">
        Over 32k+ software businesses growing with AR Shakir
      </h3>
      <ul className="flex min-h-8 w-full flex-col flex-wrap items-center justify-center gap-8 min-[33.75rem]:flex-row min-[33.75rem]:gap-5 sm:justify-between">
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
