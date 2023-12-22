import { VariantProps } from "class-variance-authority";
import { button } from "./button.styles";
import { twMerge } from "tailwind-merge";
import { Spinner } from "../loader/spinner"; // Use default export if applicable
import { ReactNode, MouseEvent } from "react";

interface ButtonProps
  extends VariantProps<typeof button>,
    Omit<React.HTMLProps<HTMLButtonElement>, "disabled" | "size"> {
  children: React.ReactNode;
  loading?: boolean;
  loadingIcon?: ReactNode | string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
  type?: "submit" | "reset" | "button";
}

function Button({
  children,
  intent,
  size,
  disabled,
  rounded,
  loading,
  bold,
  loadingIcon,
  onClick,
  reverseItems = false,
  style,
  type,
  borderStyle,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      className={twMerge(
        "flex items-center",
        button({
          intent,
          size,
          disabled: isDisabled,
          rounded,
          bold,
          reverseItems,
          borderStyle,
        })
      )}
      onClick={onClick}
      disabled={isDisabled}
      aria-disabled={loading}
      style={style}
      type={type}
      {...rest}
    >
      {loading && <Spinner loadingIcon={loadingIcon} size={size} />}
      <span className={loadingIcon ? (reverseItems ? "mr-1" : "ml-1") : ""}>
        {children}
      </span>
    </button>
  );
}

export default Button;
