import { cva, VariantProps } from "class-variance-authority";

const label = cva("pb-1", {
  variants: {
    intent: {
      primary: "text-bm_gray-900",
      error: "text-bm_danger-500 ",
      warning: "text-bm_warning-500",
      success: "text-bm_success-500",
      info: "text-bm_info-500",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
    },
    bold: {
      true: "font-bold",
    },
  },
});

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
  size = "sm",
  style,
}: LabelProps) {
  return (
    <label
      className={`${label({
        intent,
        size,
        bold,
      })} ${className}`}
      htmlFor={htmlFor}
      style={style}
    >
      {children}
    </label>
  );
}
