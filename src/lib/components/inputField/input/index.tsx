import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const input = cva("focus:ring-1 focus:outline-none focus:ring-inset", {
  variants: {
    intent: {
      error:
        "border text-bm_danger-600 border-bm_danger-500 rounded focus:ring-bm_danger-500 ",
      primary:
        "border border-bm_gray-300 rounded focus:ring-bm_primary-500 focus:border-bm_primary-500",
      warning:
        "border text-bm_warning-600 border-bm_warning-500 rounded focus:ring-bm_warning-500 focus:border-bm_warning-500",
      success:
        "border text-bm_success-600 border-bm_success-500 rounded focus:ring-bm_success-500 focus:border-bm_success-500",
      info: "border  text-bm_info-600 border-bm_info-500 rounded focus:ring-bm_info-500 focus:border-bm_info-500",
    },
    size: {
      xs: "text-xs px-1 py-0.5",
      sm: "text-sm px-2 py-1",
      lg: "text-lg px-2 py-2",
      xl: "text-xl px-3 py-3",
      "2xl": "text-2xl px-4 py-3",
      "3xl": "text-3xl px-5 py-4",
      "4xl": "text-4xl px-6 py-4",
      "5xl": "text-5xl px-7 py-5",
      "6xl": "text-6xl px-8 py-6",
    },
  },
});

const prefixPostfixSizes = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-43xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
    },
  },
});

type ComponentProps = {
  id: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputStyles?: React.CSSProperties;
  inputWrapperStyles?: React.CSSProperties;
  prefix?: React.ReactNode;
  postfix?: React.ReactNode;
  inputClasses?: string;
  inputWrapperClasses?: string;
  prefixWrapperClasses?: string;
  postfixWrapperClasses?: string;
  postfixWrapperStyles?: React.CSSProperties;
  prefixWrapperStyles?: React.CSSProperties;
};

export interface InputProps
  extends ComponentProps,
    VariantProps<typeof input> {}

export function Input({
  type = "text",
  id,
  intent = "primary",
  placeholder,
  onChange,
  size = "sm",
  inputStyles,
  inputWrapperStyles,
  prefix,
  postfix,
  inputClasses,
  inputWrapperClasses,
  prefixWrapperClasses,
  postfixWrapperClasses,
  postfixWrapperStyles,
  prefixWrapperStyles,
}: InputProps) {
  return (
    <div
      className={twMerge(
        "flex items-center relative",
        prefixPostfixSizes({
          size,
        }),
        inputWrapperClasses
      )}
      style={inputWrapperStyles}
    >
      {prefix && (
        <div
          className={twMerge("absolute left-4", prefixWrapperClasses)}
          style={prefixWrapperStyles}
        >
          {prefix}
        </div>
      )}
      <input
        className={twMerge(
          input({
            intent,
            size,
          }),
          inputClasses
        )}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        style={inputStyles}
      />
      {postfix && (
        <div
          className={twMerge(
            "absolute right-2",
            prefixPostfixSizes({
              size,
            }),
            postfixWrapperClasses
          )}
          style={postfixWrapperStyles}
        >
          {postfix}
        </div>
      )}
    </div>
  );
}
