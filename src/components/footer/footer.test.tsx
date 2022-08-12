import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer.tsx", () => {
  test("renders content", () => {
    const component = render(<Footer />);
    component.getByText("Contactos");
    component.getByText("Telegram");
    component.getByText("GitHub");
  });
});
