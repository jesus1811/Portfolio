import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import SkillCard from "./SkillCard";

describe("SkillCard.tsx", () => {
  test("renders content", () => {
    const component = render(<SkillCard src="/react.svg">React</SkillCard>);
    component.getByText("React");
  });
});
