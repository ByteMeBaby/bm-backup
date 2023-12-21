import { twMerge } from "tailwind-merge";

type ComponentProps = {
  el:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "div"
    | "span"
    | "div"
    | "aside"
    | "header"
    | "p";
  children?: React.ReactNode;
  wrapperClasses?: string;
  style?: React.CSSProperties;
  className?: string;
  wrapperStyle?: React.CSSProperties;
};

export default function Heading({
  el: El = "div",
  children,
  wrapperClasses,
  className,
  style,
  wrapperStyle,
}: ComponentProps) {
  return (
    <div
      className={twMerge("border-b p-3", wrapperClasses)}
      style={wrapperStyle}
    >
      <El className={className} style={style}>
        {children}
      </El>
    </div>
  );
}
