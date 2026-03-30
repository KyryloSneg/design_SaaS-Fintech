import { UILink } from "@/components/ui/custom/link";
import { CSSProperties } from "react";

export interface Item {
  text: string;
  href: string;
}

export interface FooterNavigationSectionProps {
  title: string;
  items: Item[];
  gap?: CSSProperties["gap"];
}

const FooterNavigationSection = ({
  title,
  gap,
  items,
}: FooterNavigationSectionProps) => {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-21 leading-[1.14] text-foreground-footer">{title}</h2>
      <ul className="flex flex-col" style={{ gap }}>
        {items.map(item => (
          <li key={`${item.text}-${item.href}`}>
            <UILink
              href={item.href}
              className="text-16 leading-1.5 text-foreground-footer"
            >
              {item.text}
            </UILink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterNavigationSection;
