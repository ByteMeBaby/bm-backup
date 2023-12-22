import Footer from "../../../src/lib/components/card/footer";

import { render, screen } from "@testing-library/react";

describe("Card", () => {
  describe("Footer", () => {
    it("renders correctly", () => {
      const customStyle = { backgroundColor: "rgb(0, 0, 255)" };
      const wrapperClass = "customWrapperClass";

      render(
        <Footer el="span" wrapperClasses={wrapperClass} style={customStyle}>
          Footer
        </Footer>
      );
      const footer = screen.getByText("Footer");

      expect(footer).toBeInTheDocument();
      expect(screen.getByText("Footer")?.tagName).toBe("SPAN");
      expect(footer).toHaveClass(wrapperClass);
      expect(footer).toHaveStyle(customStyle);
    });

    it("renders with the provided props", () => {
      const wrapperClasses = "wrapperClasses";
      const actionWrapperClasses = "actionWrapperClasses";

      render(
        <Footer
          wrapperClasses={wrapperClasses}
          actionWrapperClasses={actionWrapperClasses}
          actions={<>Actions</>}
        >
          Footer
        </Footer>
      );

      const footer = screen.getByText("Footer");
      expect(footer).toBeInTheDocument();
      expect(footer).toHaveClass(wrapperClasses);

      const actions = screen.getByText("Actions");
      expect(actions).toBeInTheDocument();
      expect(actions.parentElement).toHaveClass(actionWrapperClasses);
    });

    it("toggles bordered actions", () => {
      const actions = [
        ...Array(3)
          .fill(null)
          .map((_, i) => <div key={i}>Action {i}</div>),
      ];

      const borderdClassses = [
        "flex",
        "flex-1",
        "justify-center",
        "items-center",
      ];
      const { rerender } = render(
        <Footer borderd actions={actions}>
          Footer
        </Footer>
      );

      const action = screen.getByText("Action 1");
      const parentElement = action?.parentElement;

      expect(action).toBeInTheDocument();
      expect(parentElement?.parentElement?.children.length).toBe(
        actions.length
      );
      expect(parentElement).toHaveClass(...borderdClassses);
      expect(parentElement).toHaveClass("border-r");

      const lastAction = screen.getByText("Action 2");
      expect(lastAction.parentElement).not.toHaveClass("border-r");

      rerender(
        <Footer borderd={false} actions={actions} align="left">
          Footer
        </Footer>
      );

      expect(parentElement).not.toHaveClass(...borderdClassses);
      expect(parentElement).toHaveClass("mr-2");
      expect(parentElement?.parentElement).toHaveClass("justify-start");

      rerender(
        <Footer borderd={false} actions={actions} align="right">
          Footer
        </Footer>
      );
      expect(parentElement).toHaveClass("ml-2");
      expect(parentElement?.parentElement).toHaveClass("justify-end");
      const firstAction = screen.getByText("Action 0");
      expect(firstAction.parentElement).not.toHaveClass("ml-2");
    });
  });
});
