import { InputField } from "./inputField";

export default function Input({
  label,
  error,
  id = "input" + Date.now(),
  wrapperClass,
  inputClass,
  errorWrapperClass,
  labelClass,
}: {
  label: string;
  error: string;
  id?: string;
  wrapperClass: string;
  inputClass: string;
  errorWrapperClass: string;
  labelClass: string;
}) {
  return (
    <InputField className={wrapperClass}>
      <InputField.Label className={labelClass} htmlFor={id}>
        {label}
      </InputField.Label>
      <InputField.Input id={id} className={inputClass} />
      {error && (
        <InputField.Error className={errorWrapperClass}>error</InputField.Error>
      )}
    </InputField>
  );
}

export { InputField };
