import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const card = cva("shadow rounded box-border", {
  variants: {
    variant: {
      primary: "",
      secondary: "",
      success: "",
      danger: "",
      warning: "",
      info: "",
      light: "",
      dark: "",
    },
  },
});

type ComponentProps = {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  title?: React.ReactNode;
};

interface CardProps extends ComponentProps, VariantProps<typeof card> {}

export function Card({
  children,
  className,
  style,
  variant = "primary",
  title,
  ...rest
}: CardProps) {
  return (
    <div
      className={twMerge(
        card({
          variant,
          className,
        })
      )}
      style={style}
      {...rest}
    >
      {title && <Heading el="header">{title}</Heading>}
      {children}
    </div>
  );
}

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
    <El className={twMerge("text-2xl mb-2 border-b p-3", wrapperClasses)}>
      {children}
    </El>
  );
}

export function Body({
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
  return <El className={twMerge("p-3", wrapperClasses)}>{children}</El>;
}

Card.Heading = Heading;
Card.Body = Body;
