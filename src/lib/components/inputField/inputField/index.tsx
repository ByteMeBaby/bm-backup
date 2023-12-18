import { ReactNode } from "react";
import { Input } from "../input";
import { Label } from "../label";
import { Error } from "../error/error";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const inputField = cva("", {
  variants: {
    layout: {
      row: "flex flex-row",
      col: "flex flex-col",
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
  className?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
};

interface InputFieldProps
  extends ComponentProps,
    VariantProps<typeof inputField> {}

export function InputField({
  className,
  children,
  layout = "col",
  size = "sm",
  style,
}: InputFieldProps) {
  return (
    <div
      className={twMerge(
        inputField({
          layout,
          size,
        }),
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}

InputField.Input = Input;
InputField.Label = Label;
InputField.Error = Error;
