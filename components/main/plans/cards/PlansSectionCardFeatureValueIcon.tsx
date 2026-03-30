const PlansSectionCardFeatureValueIcon = ({
  src,
  value,
}: {
  src: string;
  value: boolean;
}) => {
  return (
    <img
      src={src}
      alt={value ? "Included" : "absent"}
      draggable="false"
      width={24}
      height={24}
      className="text-9 text-foreground-header"
    />
  );
};

export default PlansSectionCardFeatureValueIcon;
