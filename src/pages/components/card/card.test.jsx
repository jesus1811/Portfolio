import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("Card.tsx", () => {
  test("renders content", () => {
    const component = render(<Card src="/react.svg">React</Card>);
    component.getByText("React");
  });
});
