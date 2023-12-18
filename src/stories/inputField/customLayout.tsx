import React from "react";
import "../../index.css";
import { InputField } from "../../lib/components/inputField";

export function CustomLayout() {
  const id = "x";
  const type = "text";
  const error = ["This is error", "This is another error"];
  const onChange = () => {};
  const label = "Label";

  return (
    <>
      <p className="mb-10 text-gray-700">
        Please look at the documentation for more information.
      </p>
      <InputField size={"lg"}>
        <div className="flex items-center">
          <InputField.Label
            htmlFor={id}
            className="mr-1 text-gray-600 pb-0"
            bold
            size={"sm"}
          >
            {label}
          </InputField.Label>
          <InputField.Input
            id={id}
            type={type}
            onChange={onChange}
            inputWrapperClasses=""
            inputClasses=""
          />
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
    </>
  );
}
