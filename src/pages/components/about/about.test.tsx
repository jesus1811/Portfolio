import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import About from "./About";

describe("About.tsx", () => {
  test("renders content", () => {
    const component = render(<About />);
    component.getAllByText("¿Quién soy?")
  });
});
