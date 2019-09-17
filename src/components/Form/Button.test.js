import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("render with classnames", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button size="l" color="info" />, div);
  expect(div.firstChild.classList.contains("is-large")).toBe(true);
  expect(div.firstChild.classList.contains("is-info")).toBe(true);
});
