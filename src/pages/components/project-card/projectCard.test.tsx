import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

describe("ProjectCard.tsx", () => {
  test("renders content", () => {
    const component = render(
      <ProjectCard
        href="https//demo"
        icon="note.png"
        description="aplicacion de notas"
        tecnologies="HMTL-CSS"
        repository="https//demo"
      >
        Notes
      </ProjectCard>
    );
    component.getByText("Notes");
    component.getByText("aplicacion de notas");
    component.getByText("HMTL-CSS");
  });
});
