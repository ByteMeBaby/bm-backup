import { cva, VariantProps } from "class-variance-authority";

const errorClasses = cva("", {
  variants: {
    intent: {
      primary: "text-bm_primary-500",
      warning: "text-bm_warning-500",
      error: "text-bm_danger-500 text",
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
  },
});

type ComponentProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

interface ErrorProps
  extends ComponentProps,
    VariantProps<typeof errorClasses> {}

export function Error({
  children,
  className,
  intent = "error",
  size,
  style,
}: ErrorProps) {
  return (
    <div
      className={`${errorClasses({
        intent,
        size,
      })} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
