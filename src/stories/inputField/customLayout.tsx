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
    <div>
      <InputField>
        <InputField.Label htmlFor={id}>{label}</InputField.Label>
        <InputField.Input
          id={id}
          type={type}
          onChange={onChange}
          prefix="$"
          postfix=".00"
        />
        <InputField.Error>
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
    </div>
  );
}
