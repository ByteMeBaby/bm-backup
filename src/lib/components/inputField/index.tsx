import { InputField } from "./inputField";

export type ComponentProps = {
  label: string;
  error?: string | string[];
  id?: string;
  wrapperClasses?: string;
  errorWrapperClasses?: string;
  labelClasses?: string;
  intent?: "primary" | "error" | "warning";
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  boldLabel?: boolean;
  styles?: React.CSSProperties;
  labelStyles?: React.CSSProperties;
  inputStyles?: React.CSSProperties;
  errorStyles?: React.CSSProperties;
  inputClasses?: string;
  inputWrapperClasses?: string;
  inputWrapperStyles?: React.CSSProperties;
  postfix?: React.ReactNode;
  prefix?: React.ReactNode;
  prefixWrapperClasses?: string;
  postfixWrapperClasses?: string;
  prefixWrapperStyles?: React.CSSProperties;
  postfixWrapperStyles?: React.CSSProperties;
  fullWidth?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  disabled?: boolean;
};

function Input({
  label,
  error,
  id = "input" + Date.now(),
  wrapperClasses,
  inputClasses,
  errorWrapperClasses,
  labelClasses,
  placeholder,
  intent = "primary",
  onChange,
  size,
  boldLabel,
  labelStyles,
  inputStyles,
  inputWrapperClasses,
  inputWrapperStyles,
  errorStyles,
  styles,
  postfix,
  prefix,
  prefixWrapperClasses,
  postfixWrapperClasses,
  postfixWrapperStyles,
  prefixWrapperStyles,
  fullWidth = true,
  disabled,
  inputRef,
}: ComponentProps) {
  return (
    <InputField
      className={`${wrapperClasses}`}
      style={styles}
      fullWidth={fullWidth}
    >
      <InputField.Label
        size={size}
        className={labelClasses}
        htmlFor={id}
        intent={intent}
        bold={boldLabel}
        style={labelStyles}
      >
        {label}
      </InputField.Label>
      <InputField.Input
        id={id}
        inputClasses={inputClasses}
        inputWrapperClasses={inputWrapperClasses}
        inputWrapperStyles={inputWrapperStyles}
        inputStyles={inputStyles}
        intent={intent}
        placeholder={placeholder}
        onChange={onChange}
        size={size}
        postfix={postfix}
        prefix={prefix}
        prefixWrapperClasses={prefixWrapperClasses}
        postfixWrapperClasses={postfixWrapperClasses}
        postfixWrapperStyles={postfixWrapperStyles}
        prefixWrapperStyles={prefixWrapperStyles}
        fullWidth={fullWidth}
        inputRef={inputRef}
        disabled={disabled}
      />
      {error && (
        <InputField.Error
          className={errorWrapperClasses}
          intent={intent}
          size={size}
          style={errorStyles}
        >
          {typeof error === "string" && error}

          {Array.isArray(error) && (
            <ul>
              {error.map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          )}
        </InputField.Error>
      )}
    </InputField>
  );
}

Input.DisplayName = "Input";

export { InputField };
export default Input;
