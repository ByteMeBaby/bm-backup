import { cva, VariantProps } from "class-variance-authority";

const errorClasses = cva("", {
  variants: {
    intent: {
      primary: "text-red-500",
      warning: "text-yellow-500",
      error: "text-red-500",
    },
  },
});

type ComponentProps = {
  children: React.ReactNode;
  className?: string;
};

interface ErrorProps
  extends ComponentProps,
    VariantProps<typeof errorClasses> {}

export function Error({ children, className, intent = "error" }: ErrorProps) {
  return (
    <div
      className={`${errorClasses({
        intent,
      })} ${className}`}
    >
      {children}
    </div>
  );
}
