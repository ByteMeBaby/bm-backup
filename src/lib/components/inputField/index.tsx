import { InputField } from "./inputField";

export type ComponentProps = {
  label: string;
  error: string | string[];
  id?: string;
  wrapperClass: string;
  inputClass: string;
  errorWrapperClass: string;
  labelClass: string;
  intent: "primary" | "error" | "warning";
};

export default function Input({
  label,
  error,
  id = "input" + Date.now(),
  wrapperClass,
  inputClass,
  errorWrapperClass,
  labelClass,
  intent = "primary",
}: ComponentProps) {
  return (
    <InputField className={`${wrapperClass}`}>
      <InputField.Label className={labelClass} htmlFor={id} intent={intent}>
        {label}
      </InputField.Label>
      <InputField.Input id={id} className={inputClass} intent={intent} />
      {error && (
        <InputField.Error className={errorWrapperClass} intent={intent}>
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
