import React from "react";
import "../../index.css";
import { InputField } from "../../lib/components/inputField";
// import Code from "../../lib/components/code";

/**
 * If you want to customize the structure of the Inputfield instead of using Input component directly, You could do that with InputField component
 */
export function CompoundedInput({
  label,
  id,
  type,
}: {
  label: string;
  id: string;
  type: string;
}) {
  return (
    <div>
      <InputField>
        <InputField.Label htmlFor={id}>{label}</InputField.Label>
        <InputField.Input id={id} type={type} />
        <InputField.Error>error</InputField.Error>
      </InputField>
    </div>
  );
}
