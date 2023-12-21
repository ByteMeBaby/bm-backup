import Footer from "../../../src/lib/components/card/footer";

import { render, screen } from "@testing-library/react";

describe("Card", () => {
  describe("Footer", () => {
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
  });
});
