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
  bodyWrapperClasses?: string;
  headerWrapperClasses?: string;
  headerStyles?: React.CSSProperties;
  bodyStyles?: React.CSSProperties;
  footerStyles?: React.CSSProperties;
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
  bodyWrapperClasses,
  headerWrapperClasses,
  headerStyles,
  bodyStyles,
  footerStyles,
  ...rest
}: CardProps) {
  if (loading) {
    return (
      <div className={twMerge(className)} style={style} {...rest}>
        <ShimmerLoader />
      </div>
    );
  }
  return (
    <div className={twMerge(card({}), className)} style={style} {...rest}>
      {title && (
        <Heading
          el="header"
          wrapperClasses={headerWrapperClasses}
          style={headerStyles}
        >
          {title}
        </Heading>
      )}
      <Body el="div" wrapperClasses={bodyWrapperClasses} style={bodyStyles}>
        {children}
      </Body>
      {actions && (
        <Footer
          el="footer"
          multiContainer={multiContainerActions}
          actionWrapperClasses={actionWrapperClasses}
          align={actionAlignment}
          actions={actions}
          style={footerStyles}
        />
      )}
    </div>
  );
}

Card.Heading = Heading;
Card.Body = Body;
Card.Footer = Footer;
