export default function Body({
  el: El = "div",
  children,
  wrapperClasses,
  style,
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
    | "main"
    | "section"
    | "p";
  children?: React.ReactNode;
  wrapperClasses?: string;
  style?: React.CSSProperties;
}) {
  return (
    <El style={style} className={wrapperClasses}>
      {children}
    </El>
  );
}
