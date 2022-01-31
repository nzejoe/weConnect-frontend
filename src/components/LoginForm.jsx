import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Button } from "react-bootstrap";
import { BsEyeSlash, BsEye } from "react-icons/bs";

import { Input } from ".";
import useInput from "../hooks/use-input";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const [formHasError, setFormHasError] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  //   EMAIL
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const {
    value: email,
    isValid: isEmailValid,
    hasError: emailHasError,
    onChange: onEmailChange,
    onBlur: onEmailBlur,
  } = useInput(validateEmail);

  //   PASSWORD
  const validatePassword = (password) => {
    return password.length !== 0;
  };
  const {
    value: password,
    // isValid: isPasswordValid,
    hasError: passwordHasError,
    onChange: onPasswordChange,
    onBlur: onPasswordBlur,
  } = useInput(validatePassword);

  useEffect(() => {
    setFormHasError(emailHasError || passwordHasError);
  }, [emailHasError, passwordHasError]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formHasError) {
      const data = {
        username: email,
        password: password,
      };
      console.log(data);
    }
  };

  console.log(formHasError);

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          isValid={isEmailValid}
          hasError={emailHasError}
          onChange={onEmailChange}
          onBlur={onEmailBlur}
          errorMessage={
            !email ? "Please enter your email address" : "Inavlid email address"
          }
        />
        <Input
          type={`${!show ? "password" : "text"}`}
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
          onBlur={onPasswordBlur}
          hasError={passwordHasError}
          errorMessage={"Please provide your password"}
          icon={
            show ? (
              <BsEye className="clickable" onClick={toggleShow} />
            ) : (
              <BsEyeSlash className="clickable" onClick={toggleShow} />
            )
          }
        />
        <FormGroup className="mb-3">
          <Button type="submit" variant="primary" className="w-100 btn-lg">
            Log in
          </Button>
        </FormGroup>
      </Form>
      <div className="text-center mb-3">
        <Link to="/account/password_reset/" className="text-center">
          Forgot password?
        </Link>
      </div>
      <hr />
      <div className="text-center mt-3">
        <Button
          variant="success"
          as={Link}
          to="/account/register/"
          className="text-center btn-lg"
        >
          Create new account
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
