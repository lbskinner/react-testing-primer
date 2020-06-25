import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

describe("Todo", () => {
  it("renders", () => {
    const { container } = render(<Todo></Todo>);
    expect(container).toBeDefined();
  });
  it("renders passed in description", () => {
    const { getByText } = render(<Todo description="wash dishes"></Todo>);
    expect(getByText("wash dishes")).toBeDefined();
  });
  it("renders text other than 'wash dishes'", () => {
    const { getByText } = render(<Todo description="do homework"></Todo>);
    expect(getByText("do homework")).toBeDefined();
  });
});
