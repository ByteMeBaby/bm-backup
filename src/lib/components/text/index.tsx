import React from "react";
import { twMerge } from "tailwind-merge";

interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

interface LabelProps extends BaseProps {
  el: "label";
  htmlFor: string;
}

interface OtherProps extends BaseProps {
  el: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div" | "li";
  htmlFor?: never;
}

type TextProps = LabelProps | OtherProps;

export function Text(props: TextProps) {
  const { el: El = "p", children, className, ...rest } = props;

  if (El !== "label" && "htmlFor" in props) {
    console.error('The "htmlFor" prop is only valid when "el" is "label".');
  }

  const labelProps =
    El === "label" ? { htmlFor: (props as LabelProps).htmlFor } : {};

  return (
    <El
      className={twMerge("text-bm_primary_text text-sm", className)}
      {...labelProps}
      {...rest}
    >
      {children}
    </El>
  );
}
