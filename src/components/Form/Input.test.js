import React from "react";
import ReactDOM from "react-dom";
import Input from "./Input";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Input className="test" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("render with classnames", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Input size="l" color="info" />, div);
  expect(div.firstChild.classList.contains("is-large")).toBe(true);
  expect(div.firstChild.classList.contains("is-info")).toBe(true);
});

it("Placeholder", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Input size="l" color="info">
      Test
    </Input>,
    div
  );

  expect(div.firstChild.placeholder).toBe("Test");
});
