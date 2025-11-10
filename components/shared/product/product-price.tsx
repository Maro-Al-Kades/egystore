import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const stringValue = value.toFixed(2);
  const [intValue, floatValue] = stringValue.split(".");

  return (
    <p className={cn("text-2xl font-semibold text-primary", className)}>
      {intValue}
      <span className="text-xs align-super">. {floatValue}</span>
      <span className="text-sm align-super mx-1">ج.م</span>
    </p>
  );
};

export default ProductPrice;
