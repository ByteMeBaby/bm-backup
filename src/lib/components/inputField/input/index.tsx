import { cva, VariantProps } from "class-variance-authority";

const input = cva("", {
  variants: {
    intent: {
      error: "border border-red-500 rounded px-2",
      primary: "border border-gray-500 rounded px-2",
      warning: "border border-gray-500 rounded px-2",
    },
  },
});

type ComponentProps = {
  id: string;
  type?: string;
  className?: string;
};

export interface InputProps
  extends ComponentProps,
    VariantProps<typeof input> {}

export function Input({
  className,
  type = "text",
  id,
  intent = "primary",
}: InputProps) {
  return (
    <input
      className={`${input({
        intent,
      })} ${className}`}
      type={type}
      id={id}
      placeholder="text field"
    />
  );
}
