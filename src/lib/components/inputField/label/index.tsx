import { cva, VariantProps } from "class-variance-authority";

const label = cva("text-sm", {
  variants: {
    intent: {
      primary: "text-bm_gray-900",
      error: "text-bm_danger-500 ",
      warning: "text-bm_warning-500",
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

export function Label({ children, htmlFor, className, intent }: LabelProps) {
  return (
    <label
      className={`${label({
        intent,
      })} ${className}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
