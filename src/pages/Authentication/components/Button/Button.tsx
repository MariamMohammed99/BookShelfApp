import React from "react";
import classes from "./Button.module.css";
import { ButtonInput } from "./Button.types";

const Button: React.FC<{ input: ButtonInput }> = ({ input }) => {
  return (
    <button
      type={input.isSubmit ? "submit" : "button"}
      onClick={input.onClick}
      className={`${classes.button} ${input.className}`}
      name="input.actionName"
    >
      {input.actionName}
    </button>
  );
};
export default Button;
