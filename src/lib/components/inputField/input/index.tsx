import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { input } from "./input.styles";

const prefixPostfixSizes = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
    },
  },
});

const wrapperStyles = cva("", {
  variants: {
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});

interface ComponentProps {
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
  inputRef?: React.Ref<HTMLInputElement>;
}

export interface InputProps
  extends ComponentProps,
    VariantProps<typeof input>,
    Omit<
      React.HTMLProps<HTMLInputElement>,
      "id" | "onChange" | "prefix" | "size"
    > {}

export default function Input({
  type = "text",
  id,
  intent,
  placeholder,
  onChange,
  size,
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
  fullWidth,
  inputRef,
  ...rest
}: InputProps) {
  return (
    <div
      className={twMerge(
        "flex items-center relative",
        wrapperStyles({
          fullWidth,
        }),
        inputWrapperClasses
      )}
      style={inputWrapperStyles}
    >
      {prefix && (
        <div
          className={twMerge(
            "absolute left-4",
            prefixPostfixSizes({
              size,
            }),
            prefixWrapperClasses
          )}
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
            fullWidth,
          }),
          inputClasses
        )}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        style={inputStyles}
        ref={inputRef}
        {...rest}
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

Input.DisplayName = "Input";
