import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { Heading } from "./heading";
import { Body } from "./body";
import { Footer } from "./footer";
import { ShimmerLoader } from "../loader/shimmer";

const card = cva("shadow rounded box-border", {
  variants: {},
});

type ComponentProps = {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  actions?: React.ReactNode;
  actionAlignment?: "left" | "right" | "evenly" | "between";
  actionWrapperClasses?: string;
  multiContainerActions?: boolean;
  loading?: boolean;
};

interface CardProps extends ComponentProps, VariantProps<typeof card> {}

export function Card({
  children,
  className,
  style,
  title,
  actions,
  actionWrapperClasses,
  actionAlignment = "evenly",
  multiContainerActions = true,
  loading = false,
  ...rest
}: CardProps) {
  if (loading) {
    return (
      <div className={twMerge(card({}), className)} style={style} {...rest}>
        <ShimmerLoader />
      </div>
    );
  }
  return (
    <div className={twMerge(card({}), className)} style={style} {...rest}>
      {title && <Heading el="header">{title}</Heading>}
      {children}
      {actions && (
        <Footer
          multiContainer={multiContainerActions}
          wrapperClasses={actionWrapperClasses}
          align={actionAlignment}
        >
          {actions}
        </Footer>
      )}
    </div>
  );
}

Card.Heading = Heading;
Card.Body = Body;
Card.Footer = Footer;
