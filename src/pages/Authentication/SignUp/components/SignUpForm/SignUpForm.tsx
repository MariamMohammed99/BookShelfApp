import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import classes from "./SignUpForm.module.css";

import {
  isEmail,
  isEmpty,
  isPassword,
  passwordConfirmed,
} from "../../../../../utils/utils";
import { SignUpUser, SignUpValidation } from "../../SignUp.types";

const SignUpForm = () => {
  const initialValidation: SignUpValidation = {
    emailHasError: false,
    nameHasError: false,
    passwordHasError: false,
    retypedPasswordHasError: false,
  };
  const [state, setState] = useState<SignUpUser>({
    email: "",
    password: "",
    retypedPassword: "",
    name: "",
  });
  const [validationError, setValidationError] = useState(initialValidation);
  const [submitForm, setSubmitForm] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const navigate = useNavigate();

  const validation = (data: SignUpUser) => {
    let passwordHasError = false;
    let retypedPasswordHasError = false;
    let nameHasError = false;
    let emailHasError = false;
    if (isEmpty(data.name)) {
      nameHasError = true;
    }
    if (!isEmail(data.email)) {
      emailHasError = true;
    }
    if (!isPassword(data.password)) {
      passwordHasError = true;
    }
    if (!passwordConfirmed(data.password, data.retypedPassword)) {
      retypedPasswordHasError = true;
    }
    if (
      passwordHasError ||
      emailHasError ||
      retypedPasswordHasError ||
      nameHasError
    ) {
      setValidationError({
        passwordHasError,
        emailHasError,
        nameHasError,
        retypedPasswordHasError,
      });
      setFormIsValid(false);
      return;
    }
    setValidationError(initialValidation);
    setFormIsValid(true);
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
            label: "Name",
            type: "text",
            value: state.name,
            name: "name",
            onChange: valueChangeHandler,
            hasError: validationError.nameHasError,
            placeHolder: "name",
          }}
        />
        <Input
          input={{
            label: "Email",
            type: "email",
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
        <Input
          input={{
            label: "Re-Type Password",
            type: "password",
            name: "retypedPassword",
            value: state.retypedPassword,
            onChange: valueChangeHandler,
            hasError: validationError.retypedPasswordHasError,
            placeHolder: "should match the password",
          }}
        />
        <Button
          input={{
            className: classes["form-button"],
            actionName: "Sign Up",
            onClick: submitHandler,
            isSubmit: true,
          }}
        />
        <div className={classes.footer}>
          <p>Already have an account?</p>
        </div>
        <div className={classes.footer}>
          <a href="/login">Log in</a>
        </div>
      </form>
    </div>
  );
};
export default SignUpForm;
