import { cn } from "@/utils/shadcn";
import ServiceItem, { ServiceItemProps } from "./ServiceItem";
import ServiceLogo from "./ServiceLogo";
import { serviceItemBaseClassName } from "./shared";
import Link from "next/link";

const servicesListData: ServiceItemProps[] = [
  {
    logo: <ServiceLogo src="/icons/checks-grid.svg" />,
    title: "Project Management",
    description: "30 options available",
  },
  {
    logo: <ServiceLogo src="/icons/pen.svg" />,
    title: "Web & Mobile Development",
    description: "40 options available",
  },
  {
    logo: <ServiceLogo src="/icons/headset.svg" />,
    title: "Customer Support",
    description: "17 options available",
  },
  {
    logo: <ServiceLogo src="/icons/people.svg" />,
    title: "Human Resources",
    description: "21 options available",
  },
  {
    logo: <ServiceLogo src="/icons/gem.svg" />,
    title: "Design & Creatives",
    description: "13 options available",
  },
  {
    logo: <ServiceLogo src="/icons/lightning.svg" />,
    title: "Marketing & Communication",
    description: "27 options available",
  },
  {
    logo: <ServiceLogo src="/icons/briefcase.svg" />,
    title: "Business Development",
    description: "22 options available",
  },
];

const ServicesList = () => {
  return (
    <ul className="grid w-full grid-cols-[1fr] gap-x-7.5 gap-y-6.75 px-0 2sm:px-[10%] services-list-2col:grid-cols-[1fr_1fr] services-list-2col:px-0 services-list-4col:grid-cols-[1fr_1fr_1fr_1fr]">
      {servicesListData.map(item => (
        <li key={item.title}>
          <ServiceItem {...item} />
        </li>
      ))}
      <li>
        <Link href="#">
          <section
            className={cn(
              serviceItemBaseClassName,
              "h-full justify-between gap-4.25 bg-primary px-10.75 pt-22.25",
            )}
          >
            <h3 className="flex w-full max-w-16 flex-col gap-4.5 text-26-tight leading-[0.85] font-bold text-primary-foreground services-list-big-heading:max-w-20 services-list-big-heading:text-33-tight">
              <span>+4</span>
              <span>More</span>
            </h3>
            <p className="text-12-tight leading-[2.5] text-primary-foreground">
              170+ options available
            </p>
          </section>
        </Link>
      </li>
    </ul>
  );
};

export default ServicesList;
