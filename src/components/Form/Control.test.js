import React from "react";
import ReactDOM from "react-dom";
import Control from "./Control";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Control />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("expanded test", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Control expanded={true} />, div);
  expect(div.firstChild.classList.contains("is-expanded")).toBe(true);
});

it("expanded false test", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Control expanded={false} />, div);
  expect(div.firstChild.classList.contains("is-expanded")).toBe(false);
});

it("No expanded prop test", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Control />, div);
  expect(div.firstChild.classList.contains("is-expanded")).toBe(false);
});
