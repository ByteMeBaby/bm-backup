import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../../../src/lib/components/button";
import { vi } from "vitest";

describe("Button", () => {
  it("renders properly when props are passed", () => {
    const { rerender } = render(<Button>Button</Button>);
    expect(screen.getByText("Button")).toBeInTheDocument();

    rerender(<Button disabled={true}>Button</Button>);

    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();

    rerender(<Button loading={true}>Button</Button>);
    expect(btn).toBeDisabled();
    expect(screen.getByTestId("spinner")).toBeInTheDocument();

    rerender(
      <Button loading={true} loadingIcon={<div>loading</div>}>
        Button
      </Button>
    );
    expect(screen.getByText("loading")).toBeInTheDocument();
  });

  it("handles the click event", () => {
    const handleClick = vi.fn();
    const { rerender } = render(<Button onClick={handleClick}>Button</Button>);

    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
    handleClick.mockReset();

    rerender(
      <Button disabled onClick={handleClick}>
        Button
      </Button>
    );

    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
