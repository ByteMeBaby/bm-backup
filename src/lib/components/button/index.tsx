import { VariantProps } from "class-variance-authority";
import { button } from "./button.styles";
import { twMerge } from "tailwind-merge";
import { Spinner } from "../loader/spinner";
import { MouseEvent, ReactNode } from "react";

type ComponentProps = {
  children: React.ReactNode;
  loading?: boolean;
  loadingIcon?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

interface ButtonProps extends ComponentProps, VariantProps<typeof button> {}

export function Button({
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
  ...rest
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        "flex items-center",
        button({
          intent,
          size,
          disabled,
          rounded,
          bold,
          reverseItems,
        })
      )}
      onClick={onClick}
      disabled={!!disabled}
      aria-disabled={loading ? "true" : "false"}
      {...rest}
    >
      {loading && <Spinner loadingIcon={loadingIcon} size={size} />}
      <span className={reverseItems ? "mr-1" : "ml-1"}>{children}</span>
    </button>
  );
}
