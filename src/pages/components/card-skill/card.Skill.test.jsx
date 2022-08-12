import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CardSkill from "./CardSkill";

describe("CardSkill.tsx", () => {
  test("renders content", () => {
    const component = render(<CardSkill src="/react.svg">React</CardSkill>);
    component.getByText("React");
  });
});
