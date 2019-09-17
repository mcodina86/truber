import React from "react";

const Field = props => {
  const classesItems = ["field"];
  if (props.addons) classesItems.push("has-addons");
  if (props.addonsDirection) classesItems.push(props.addonsDirection);
  if (props.grouped) classesItems.push("is-grouped");
  if (props.groupedDirection) classesItems.push(props.groupedDirection);
  return <div className={classesItems.join(" ")}>{props.children}</div>;
};

export default Field;
