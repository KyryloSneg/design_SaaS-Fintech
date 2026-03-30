export interface GrowingBusinessProps {
  src: string;
  alt: string;
}

const GrowingBusiness = ({ src, alt }: GrowingBusinessProps) => {
  return (
    <a href="#" target="_blank">
      <img
        src={src}
        alt={alt}
        draggable="false"
        className="min-w-34.25 text-14"
        loading="lazy"
      />
    </a>
  );
};

export default GrowingBusiness;
