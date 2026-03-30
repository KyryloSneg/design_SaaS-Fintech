export interface ServiceLogoProps {
  src: string;
}

const ServiceLogo = ({ src }: ServiceLogoProps) => {
  return (
    <div className="w-max rounded-[0.3125rem] bg-muted p-2">
      <img
        src={src}
        alt=""
        draggable="false"
        loading="lazy"
        width={24}
        height={24}
      />
    </div>
  );
};

export default ServiceLogo;
