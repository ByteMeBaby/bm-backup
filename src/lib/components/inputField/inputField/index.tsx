import { ReactNode } from "react";
import { Input } from "../input";
import { Label } from "../label";
import { Error } from "../error/error";
import { cva, VariantProps } from "class-variance-authority";

const inputField = cva("", {
  variants: {
    layout: {
      row: "flex flex-row",
      col: "flex flex-col",
    },
  },
});

type ComponentProps = {
  className?: string;
  children?: ReactNode;
};

interface InputFieldProps
  extends ComponentProps,
    VariantProps<typeof inputField> {}

export function InputField({
  className,
  children,
  layout = "col",
}: InputFieldProps) {
  return (
    <div
      className={`${inputField({
        layout,
      })} ${className}`}
    >
      {children}
    </div>
  );
}

InputField.Input = Input;
InputField.Label = Label;
InputField.Error = Error;
