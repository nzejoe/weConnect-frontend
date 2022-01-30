import React, { useState, useEffect } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { BsEyeSlash, BsEye } from "react-icons/bs";

import { UnauthenticatedUser } from "../components";
import useInput from "../hooks/use-input";
import { Input } from "../components";

const PasswordResetComplete = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const toggleShowPassword1 = () => setShowPassword1(!showPassword1);
  const toggleShowPassword2 = () => setShowPassword2(!showPassword2);

  //   PASSWORD
  const validatePassword = (password) => {
    return password.length > 5;
  };
  const {
    value: password,
    isValid: isPasswordValid,
    hasError: passwordHasError,
    onChange: onPasswordChange,
    onBlur: onPasswordBlur,
  } = useInput(validatePassword);

  //   CONFIRM PASSWORD
  const validatePassword2 = (password2) => {
    return password === password2;
  };
  const {
    value: password2,
    isValid: isPassword2Valid,
    hasError: password2HasError,
    onChange: onPassword2Change,
    onBlur: onPassword2Blur,
  } = useInput(validatePassword2);

  const formValid = isPasswordValid && isPassword2Valid

  useEffect(() => {
    if (formValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [formValid]);

  return (
    <UnauthenticatedUser>
      <Card className="password-reset-complete-form p-3">
        <h5 >Set new password</h5>
        <Form>
          <Input
            type={`${!showPassword1 ? "password" : "text"}`}
            name="password"
            icon={
              showPassword1 ? (
                <BsEye
                  className="icon clickable"
                  onClick={toggleShowPassword1}
                />
              ) : (
                <BsEyeSlash
                  className="icon clickable"
                  onClick={toggleShowPassword1}
                />
              )
            }
            placeholder={"Password"}
            value={password}
            isValid={isPasswordValid}
            onChange={onPasswordChange}
            onBlur={onPasswordBlur}
            hasError={passwordHasError}
            errorMessage={`${
              password
                ? "More than 5 characters for a password"
                : "Please provide a password"
            }`}
          />
          {/* CONFIRM PASSWORD */}
          <Input
            type={`${!showPassword2 ? "password" : "text"}`}
            name="password2"
            icon={
              showPassword2 ? (
                <BsEye
                  className="icon clickable"
                  onClick={toggleShowPassword2}
                />
              ) : (
                <BsEyeSlash
                  className="icon clickable"
                  onClick={toggleShowPassword2}
                />
              )
            }
            placeholder={"Confirm password"}
            value={password2}
            isValid={isPassword2Valid}
            onChange={onPassword2Change}
            onBlur={onPassword2Blur}
            hasError={password2HasError}
            errorMessage={`${
              password2
                ? "Password did not match"
                : "Please confirm your password"
            }`}
          />
          <Button type="submit" className="w-100" disabled={!formIsValid}>
            Set password
          </Button>
        </Form>
      </Card>
    </UnauthenticatedUser>
  );
};

export default PasswordResetComplete;
