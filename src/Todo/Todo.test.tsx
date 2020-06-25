import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

describe("Todo", () => {
  it("renders", () => {
    const { container } = render(<Todo></Todo>);
    expect(container).toBeDefined();
  });
});
