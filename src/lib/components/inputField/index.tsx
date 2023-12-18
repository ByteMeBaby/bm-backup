import { InputField } from "./inputField";

export type ComponentProps = {
  label: string;
  error?: string | string[];
  id?: string;
  wrapperClasses?: string;
  inputClasses?: string;
  errorWrapperClasses?: string;
  labelClasses?: string;
  intent?: "primary" | "error" | "warning";
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  boldLabel?: boolean;
  styles: React.CSSProperties;
  labelStyles: React.CSSProperties;
  inputStyles: React.CSSProperties;
  errorStyles: React.CSSProperties;
};

export default function Input({
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
  errorStyles,
  styles,
}: ComponentProps) {
  return (
    <InputField className={`${wrapperClasses}`} style={styles}>
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
        className={inputClasses}
        intent={intent}
        placeholder={placeholder}
        onChange={onChange}
        size={size}
        style={inputStyles}
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

export { InputField };
