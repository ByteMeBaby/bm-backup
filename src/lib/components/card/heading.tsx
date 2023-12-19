import { twMerge } from "tailwind-merge";

export function Heading({
  el: El = "div",
  children,
  wrapperClasses,
}: {
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
}) {
  return (
    <El className={twMerge("text-2xl border-b p-3", wrapperClasses)}>
      {children}
    </El>
  );
}
