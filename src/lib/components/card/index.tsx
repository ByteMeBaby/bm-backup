import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const card = cva("shadow p-3 rounded", {
  variants: {
    variant: {
      primary: "",
      secondary: "",
      success: "",
      danger: "",
      warning: "",
      info: "",
      light: "",
      dark: "",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});

type ComponentProps = {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

interface CardProps extends ComponentProps, VariantProps<typeof card> {}

export function Card({
  children,
  className,
  style,
  variant = "primary",
  fullWidth,
  ...rest
}: CardProps) {
  return (
    <div
      className={twMerge(
        card({
          variant,
          className,
          fullWidth,
        })
      )}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}
