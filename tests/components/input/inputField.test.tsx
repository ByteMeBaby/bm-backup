import { screen, render } from "@testing-library/react";
import Input, { InputField } from "../../../src/lib/components/inputField";
import { createRef } from "react";

describe("Basic input", () => {
  it("renders a input component", () => {
    render(<Input label="textbox" id="input" />);

    expect(screen.getByLabelText("textbox")).toBeInTheDocument();
  });
});

describe("Compound component", () => {
  it("renders a compound component", () => {
    const label = "Label";
    const id = "input";

    render(
      <InputField>
        <InputField.Label htmlFor={id}>{label}</InputField.Label>
        <InputField.Input id={id} />
        <InputField.Error>error</InputField.Error>
      </InputField>
    );

    const input = screen.getByLabelText(label);
    expect(input).toBeInTheDocument();

    input.focus();
    expect(input).toHaveFocus();
  });

  it("correctly passes the ref to input", () => {
    const ref = createRef<HTMLInputElement>();

    render(
      <InputField>
        <InputField.Input id="input" inputRef={ref} />
      </InputField>
    );

    expect(ref.current).toBeInTheDocument();
    ref?.current?.focus();
    expect(ref.current).toHaveFocus();
  });
});
