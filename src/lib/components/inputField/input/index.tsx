import { cva, VariantProps } from "class-variance-authority";

const input = cva("", {
  variants: {
    intent: {
      error: "border border-bm_danger-500 rounded px-2",
      primary: "border border-bm_gray-300 rounded px-2",
      warning: "border border-bm_warning-500 rounded px-2",
    },
  },
});

type ComponentProps = {
  id: string;
  type?: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface InputProps
  extends ComponentProps,
    VariantProps<typeof input> {}

export function Input({
  className,
  type = "text",
  id,
  intent = "primary",
  placeholder,
  onChange,
}: InputProps) {
  return (
    <input
      className={`${input({
        intent,
      })} ${className}`}
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
