import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Projects from "./Projects";

describe("Porjects.tsx", () => {
  test("renders content", () => {
    const component = render(<Projects />);
    component.getByText("Service-commerce");
    component.getByText("Notes");
  });
});
