import React from "react";
import "../../index.css";
import { InputField } from "../../lib/components/inputField";

export function CustomLayout({
  label,
  id,
  type,
  onChange,
  error,
}: {
  label: string;
  id: string;
  type: string;
  onChange;
  error: string | string[];
}) {
  return (
    <InputField size={"lg"}>
      <div className="flex items-center">
        <InputField.Label
          htmlFor={id}
          className="mr-1 text-gray-600"
          bold
          size={"sm"}
        >
          {label}
        </InputField.Label>
        <InputField.Input id={id} type={type} onChange={onChange} />
      </div>
      <InputField.Error size={"sm"} className="ml-10 mt-2">
        {typeof error === "string" && error}

        {Array.isArray(error) && (
          <ul>
            {error.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
      </InputField.Error>
    </InputField>
  );
}
