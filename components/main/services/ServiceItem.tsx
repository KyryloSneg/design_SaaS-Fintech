import { cn } from "@/utils/shadcn";
import { serviceItemBaseClassName } from "./shared";
import Link from "next/link";

export interface ServiceItemProps {
  logo: React.ReactNode;
  title: string;
  description: string;
}

const ServiceItem = ({ logo, title, description }: ServiceItemProps) => {
  return (
    <Link href="#">
      <section
        className={cn(
          serviceItemBaseClassName,
          // in order to easily replicate "inner" border, use outline that doesn't affect the flow
          "gap-6.25 bg-background px-13.75 pt-14.25 outline-1 outline-border",
        )}
      >
        {logo}
        <div className="flex max-w-37.5 flex-col gap-0.5">
          <h3 className="text-18-tight leading-[1.4] font-bold services-list-big-heading:text-20-tight">
            {title}
          </h3>
          <p className="text-12-tight leading-[2.5] text-foreground-secondary">
            {description}
          </p>
        </div>
      </section>
    </Link>
  );
};

export default ServiceItem;
