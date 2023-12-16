import { screen, render } from "@testing-library/react";
import { InputField } from "../../src/lib/components/inputField";

describe("Simple input", () => {
  it("renders a input component", () => {
    render(<InputField.Input id="input" />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
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
});
