import Link from "next/link";

const SocialMediaItem = ({
  href,
  alt,
  src,
}: {
  href: string;
  alt: string;
  src: string;
}) => {
  return (
    <li>
      <a href={href} target="_blank">
        <img
          alt={alt}
          src={src}
          width={20}
          height={20}
          className="text-9 select-none"
          draggable="false"
        />
      </a>
    </li>
  );
};

const FooterAside = () => {
  return (
    <aside className="flex flex-col gap-7.75">
      <section className="flex flex-col gap-4.5">
        <Link href="#">
          <h2 className="text-21-tight leading-[1.33] text-foreground-footer-header">
            AR SHAKIR
          </h2>
        </Link>
        <p className="max-w-53.25 text-16-tight leading-[1.75] text-foreground-secondary">
          Finance helps companies manage payments easily.
        </p>
      </section>
      <ul className="flex gap-4">
        <SocialMediaItem href="#" alt="LinkedIn" src="/icons/linkedin.svg" />
        <SocialMediaItem href="#" alt="Messenger" src="/icons/messenger.svg" />
        <SocialMediaItem href="#" alt="Twitter" src="/icons/twitter.svg" />
        <SocialMediaItem href="#" alt="Twoo" src="/icons/twoo.svg" />
      </ul>
    </aside>
  );
};

export default FooterAside;
