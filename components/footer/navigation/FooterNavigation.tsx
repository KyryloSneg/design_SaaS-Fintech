import FooterNavigationSection, {
  FooterNavigationSectionProps,
} from "./FooterNavigationSection";

interface SectionItem extends FooterNavigationSectionProps {
  paddingRight?: string | number;
}

const sectionItems: SectionItem[] = [
  {
    title: "Company",
    items: [
      { text: "About Us", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Blog", href: "#" },
      { text: "Pricing", href: "#" },
    ],
    gap: "1.5rem",
    // a bit different from the design in order to properly align with the copyright paragraph
    paddingRight: "7.25rem",
  },
  {
    title: "Product",
    items: [
      { text: "Invoicing", href: "#" },
      { text: "Contract", href: "#" },
      { text: "Accounting", href: "#" },
      { text: "Proposal", href: "#" },
    ],
    gap: "0.75rem",
    paddingRight: "6.1875rem",
  },
  {
    title: "Resources",
    items: [
      { text: "Proposal Template", href: "#" },
      { text: "Invoice Template", href: "#" },
      { text: "Tutorial", href: "#" },
      { text: "How to write a contract", href: "#" },
    ],
    gap: "0.75rem",
  },
];

const FooterNavigation = () => {
  return (
    <nav>
      <ul className="flex flex-wrap justify-between gap-y-8 max-footer-row:gap-x-12 footer-nav-address-row:justify-end 2xl:justify-center">
        {sectionItems.map(item => (
          <li
            key={item.title}
            className="max-footer-row:p-0!"
            style={{ paddingRight: item.paddingRight }}
          >
            <FooterNavigationSection {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavigation;
