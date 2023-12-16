import { ReactNode } from "react";
import { Input } from "../input";
import { Label } from "../label";
import { Error } from "../error/error";

export function InputField({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return <div className={className}>{children}</div>;
}

InputField.Input = Input;
InputField.Label = Label;
InputField.Error = Error;
