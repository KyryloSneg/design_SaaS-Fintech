const liClassName = "flex items-center gap-2.75 text-16 leading-1.5";
const iconClassName = "text-9 select-none";

const iconSize = 22;

const FooterAddress = () => {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-21 leading-[1.14] text-foreground-footer">
        Contact Us
      </h2>
      <address>
        <ul className="flex flex-col gap-3">
          <li className={liClassName}>
            <img
              alt="Email"
              src="/icons/email.svg"
              width={iconSize}
              height={iconSize}
              className={iconClassName}
              loading="lazy"
              draggable="false"
            />
            shakir260@gmail.com
          </li>
          <li className={liClassName}>
            <img
              alt="Phone"
              src="/icons/call.svg"
              width={iconSize}
              height={iconSize}
              className={iconClassName}
              loading="lazy"
              draggable="false"
            />
            +92-300-848-8985
          </li>
        </ul>
      </address>
    </section>
  );
};

export default FooterAddress;
