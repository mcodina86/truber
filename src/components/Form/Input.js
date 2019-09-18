import React from "react";
import getSizes from "../../helpers/getSizes";
import getColors from "../../helpers/getColors";

const Input = React.forwardRef((props, ref) => {
  const cls = ["input"];
  if (props.size) cls.push(getSizes(props.size));
  if (props.color) cls.push(getColors(props.color));

  return <input ref={ref} className={cls.join(" ")} type={props.inputType || "text"} placeholder={props.children}></input>;
});

export default Input;
