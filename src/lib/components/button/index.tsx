import { VariantProps } from "class-variance-authority";
import { button, loadingIcon as loadingIconStyles } from "./button.styles";
import { twMerge } from "tailwind-merge";

type ComponentProps = {
  children: React.ReactNode;
  loading?: boolean;
  loadingIcon?: React.ReactNode;
};

interface ButtonProps extends ComponentProps, VariantProps<typeof button> {}

type LoadingIconProps = {
  loadingIcon?: React.ReactNode;
};

interface LoadingSpinnerProps
  extends LoadingIconProps,
    VariantProps<typeof loadingIconStyles> {}

const LoadingSpinnerSvg = ({ loadingIcon, size }: LoadingSpinnerProps) => (
  <span
    className={twMerge(
      "animate-spin",
      loadingIconStyles({
        size,
      })
    )}
  >
    {loadingIcon ? (
      loadingIcon
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        data-slot="icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    )}
  </span>
);

export function Button({
  children,
  intent,
  size,
  disabled,
  rounded,
  loading,
  bold,
  loadingIcon,
  reverseItems,
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
      {...rest}
      disabled
    >
      {loading && <LoadingSpinnerSvg loadingIcon={loadingIcon} size={size} />}
      <span className={reverseItems ? "mr-1" : "ml-1"}>{children}</span>
    </button>
  );
}
