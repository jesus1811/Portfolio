import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout.tsx", () => {
  test("renders content", () => {
    const component = render(
      <Layout>
        <h1>hola mundo</h1>
      </Layout>
    );
    component.getByText("hola mundo");
  });
});
