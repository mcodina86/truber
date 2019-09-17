import React from "react";
import getSizes from "../../helpers/getSizes";
import getColors from "../../helpers/getColors";

const Button = props => {
  const btnClass = ["button"];
  if (props.size) btnClass.push(getSizes(props.size));
  if (props.color) btnClass.push(getColors(props.color));

  return (
    <button className={btnClass.join(" ")} onClick={props.action}>
      {props.children}
    </button>
  );
};

export default Button;
