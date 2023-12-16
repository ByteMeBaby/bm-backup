import { cva, VariantProps } from "class-variance-authority";

const label = cva("", {
  variants: {
    intent: {
      primary: "text-gray-500",
      error: "text-red-500",
      warning: "text-red-500",
    },
  },
});

export type ComponentProps = {
  children: React.ReactNode;
  htmlFor: string;
  className?: string;
};

export interface LabelProps
  extends VariantProps<typeof label>,
    ComponentProps {}

export function Label({ children, htmlFor, className }: LabelProps) {
  return (
    <label
      className={`${{
        intent: "primary",
      }} ${className}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
