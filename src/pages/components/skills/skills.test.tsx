import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills.tsx", () => {
  test("renders content", () => {
    const component = render(<Skills />);
    component.getByText("Mi sección de tecnologías:");
    component.getByText("Skills");
  });
});
