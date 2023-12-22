import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Heading from "./heading";
import Body from "./body";
import Footer from "./footer";
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
  actionWrapperClassName?: string;
  borderdActions?: boolean;
  loading?: boolean;
  bodyWrapperClassName?: string;
  headerWrapperClassName?: string;
  headerStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  footerStyle?: React.CSSProperties;
  footerWrapperClassName?: string;
};

interface CardProps extends ComponentProps, VariantProps<typeof card> {}

export function Card({
  children,
  className,
  style,
  title,
  actions,
  actionWrapperClassName,
  actionAlignment = "evenly",
  borderdActions,
  loading = false,
  bodyWrapperClassName,
  headerWrapperClassName,
  headerStyle,
  bodyStyle,
  footerStyle,
  footerWrapperClassName,
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
          wrapperClassName={headerWrapperClassName}
          style={headerStyle}
        >
          {title}
        </Heading>
      )}
      <Body el="div" wrapperClassName={bodyWrapperClassName} style={bodyStyle}>
        {children}
      </Body>
      {actions && (
        <Footer
          el="footer"
          borderd={borderdActions}
          actionWrapperClassName={actionWrapperClassName}
          wrapperClassName={footerWrapperClassName}
          align={actionAlignment}
          actions={actions}
          style={footerStyle}
        />
      )}
    </div>
  );
}

Card.Heading = Heading;
Card.Body = Body;
Card.Footer = Footer;
