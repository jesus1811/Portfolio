import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner", () => {
  test("renders content", () => {
    const component = render(<Banner />);
    component.getByText("Jesus Ayarza");
    component.getByText("React Front End Developer");
  });
});
