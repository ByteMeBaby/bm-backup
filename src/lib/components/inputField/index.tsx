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
}: ComponentProps) {
  return (
    <InputField className={`${wrapperClasses}`}>
      <InputField.Label className={labelClasses} htmlFor={id} intent={intent}>
        {label}
      </InputField.Label>
      <InputField.Input
        id={id}
        className={inputClasses}
        intent={intent}
        placeholder={placeholder}
      />
      {error && (
        <InputField.Error className={errorWrapperClasses} intent={intent}>
          {typeof error === "string" && error}

          {Array.isArray(error) && (
            <ul>
              {error.map((err, index) => (
                <li key={index}>{err}</li>
              ))}
            </ul>
          )}
        </InputField.Error>
      )}
    </InputField>
  );
}

export { InputField };
