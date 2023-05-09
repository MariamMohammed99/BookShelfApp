import classes from "./Input.module.css";
import { InputProps } from "./Input.types";

const Input: React.FC<{ input: InputProps }> = ({ input }) => {
  const style = `${classes.input} ${input.hasError && classes.error}`;
  const errorMessage = `Please enter a valid ${input.label}`;
  return (
    <>
      <div className={style}>
        <label htmlFor={input.label}>{input.label}</label>
        <input
          id={input.label}
          name={input.name}
          type={input.type}
          placeholder={input.placeHolder}
          value={input.value}
          onChange={input.onChange}
        />
      </div>
      <div className={classes.error}>
        {input.hasError && <p>{errorMessage}</p>}
      </div>
    </>
  );
};
export default Input;
