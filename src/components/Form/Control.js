import React from "react";

const Control = props => {
  const cls = ["control"];
  if (props.expanded) cls.push("is-expanded");

  return <div className={cls.join(" ")}>{props.children}</div>;
};

export default Control;
