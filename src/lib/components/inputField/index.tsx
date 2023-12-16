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
        onChange={onChange}
      />
      {error && (
        <InputField.Error className={errorWrapperClasses} intent={intent}>
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
