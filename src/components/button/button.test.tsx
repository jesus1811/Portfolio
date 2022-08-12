import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button.tsx", () => {
  test("renders content", () => {
    const component = render(
      <Button secundary href="demo">
        buscar
      </Button>
    );
    component.getByText("buscar");
  });
});
