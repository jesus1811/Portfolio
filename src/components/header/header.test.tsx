import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header.tsx", () => {
  test("render content", () => {
    const component = render(<Header />);
    component.getByText("JesuDev");
    component.getByText("Sobre Mi");
    component.getByText("Skills");
  });
});
