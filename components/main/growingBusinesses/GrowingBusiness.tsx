export interface GrowingBusinessProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const GrowingBusiness = ({ src, alt, width, height }: GrowingBusinessProps) => {
  return (
    <a href="#" target="_blank">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        draggable="false"
        className="text-14"
        loading="lazy"
      />
    </a>
  );
};

export default GrowingBusiness;
