import React from "react";
import ReactDOM from "react-dom";
import Field from "./Field";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Field />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("addons test", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Field addons={true} />, div);
  expect(div.firstChild.classList.contains("has-addons")).toBe(true);
});

it("grouped test", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Field grouped={true} />, div);
  expect(div.firstChild.classList.contains("is-grouped")).toBe(true);
});

it("addonsDirection test", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Field addonsDirection="has-addons-right" />, div);
  expect(div.firstChild.classList.contains("has-addons-right")).toBe(true);
});

it("addonsDirection test", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Field groupedDirection="is-grouped-center" />, div);
  expect(div.firstChild.classList.contains("is-grouped-center")).toBe(true);
});

it("All props together test", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Field addons={true} addonsDirection="has-addons-right" grouped={true} groupedDirection="is-grouped-center" />, div);
  expect(div.firstChild.classList.contains("has-addons")).toBe(true);
  expect(div.firstChild.classList.contains("is-grouped")).toBe(true);
  expect(div.firstChild.classList.contains("is-grouped-center")).toBe(true);
  expect(div.firstChild.classList.contains("has-addons-right")).toBe(true);
});
