import { VariantProps } from "class-variance-authority";
import { label } from "./label.styles";
import { Text } from "../../text";

export type ComponentProps = {
  children: React.ReactNode;
  htmlFor: string;
  className?: string;
  style?: React.CSSProperties;
};

export interface LabelProps
  extends VariantProps<typeof label>,
    ComponentProps {}

export function Label({
  children,
  htmlFor,
  className,
  intent,
  bold,
  size,
  style,
}: LabelProps) {
  return (
    <Text
      el="label"
      className={`${label({
        intent,
        size,
        bold,
      })} ${className}`}
      htmlFor={htmlFor}
      style={style}
    >
      {children}
    </Text>
  );
}
