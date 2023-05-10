import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import classes from "./LoginForm.module.css";
import { isEmail, isPassword } from "../../../../../utils/utils";
import { LoginUser, LoginValidation } from "../../Login.types";

const LoginForm = () => {
  const initialValidation: LoginValidation = {
    emailHasError: false,
    passwordHasError: false,
  };
  const [state, setState] = useState<LoginUser>({
    email: "",
    password: "",
  });
  const [validationError, setValidationError] = useState(initialValidation);
  const [submitForm, setSubmitForm] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);
  let formIsValid = false;
  const navigate = useNavigate();

  const validation = (data: LoginUser) => {
    let passwordHasError = false;
    let emailHasError = false;
    if (!isPassword(data.password)) {
      passwordHasError = true;
    }
    if (!isEmail(data.email)) {
      emailHasError = true;
    }

    if (passwordHasError || emailHasError) {
      setValidationError({
        passwordHasError,
        emailHasError,
      });
      // setFormIsValid(false);
      formIsValid = false;
      return;
    }
    setValidationError(initialValidation);
    // setFormIsValid(true);
    formIsValid = true;
  };

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    if (submitForm) {
      validation({
        ...state,
        [event.currentTarget.name]: event.currentTarget.value,
      });
    }
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    validation(state);
    setSubmitForm(true);
    if (!formIsValid) {
      return;
    }
    const token = state.email + state.password;
    localStorage.setItem("token", token);
    navigate("/");
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          input={{
            label: "Email",
            type: "textbox",
            value: state.email,
            name: "email",
            onChange: valueChangeHandler,
            hasError: validationError.emailHasError,
            placeHolder: "example@gmail.com",
          }}
        />
        <Input
          input={{
            label: "Password",
            type: "password",
            name: "password",
            value: state.password,
            onChange: valueChangeHandler,
            hasError: validationError.passwordHasError,
            placeHolder: "at least 8 characters",
          }}
        />
        <Button
          input={{
            className: classes["form-button"],
            actionName: "Login",
            isSubmit: true,
          }}
        />
        <div className={classes.footer}>
          <p>Don't have an account?</p>
        </div>
        <div className={classes.footer}>
          <a href="/signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
