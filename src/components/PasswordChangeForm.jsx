import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

import useInput from "../hooks/use-input";
import { Input } from ".";

const PasswordChangeForm = ({ isUpdateHandler }) => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [formHasError, setFormHasError] = useState(true);
    const [isLoading, setIsLoading] = useState(false);


  //   PASSWORD
  const validatePassword = (password) => {
    return password.length > 5;
  };

  // current password
  const {
    value: currentPassword,
    isValid: isCurrentPasswordValid,
    hasError: currentPasswordHasError,
    onChange: onCurrentPasswordChange,
    onBlur: onCurrentPasswordBlur,
  } = useInput(validatePassword);

  // new password1
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

//   PASSWORD TOGGLERS
const toggleShowCurrentPassword = () => setShowCurrentPassword(!showCurrentPassword);
const toggleShowPassword = () => setShowPassword(!showPassword);
const toggleShowPassword2 = () => setShowPassword2(!showPassword2);


useEffect(() => {
  const formValid =
    isCurrentPasswordValid && isPasswordValid && isPassword2Valid;
  if (formValid) {
    setFormHasError(false);
  } else {
    setFormHasError(true);
  }
}, [isCurrentPasswordValid, isPasswordValid, isPassword2Valid]);


// FORM SUBMIT HANDLER
const submitHandler = (e) => {
    e.preventDefault();

    if(!formHasError){
        const data = {
            current_password: currentPassword,
            password,
            password2
        }
        isUpdateHandler(false)
        console.log(data)
    }
}

  return (
    <Form onSubmit={submitHandler}>
      {/* current password */}
      <Input
        label={"Current password"}
        type={`${!showCurrentPassword ? "password" : "text"}`}
        name="current_password"
        icon={
          showCurrentPassword ? (
            <BsEye
              className="icon clickable"
              onClick={toggleShowCurrentPassword}
            />
          ) : (
            <BsEyeSlash
              className="icon clickable"
              onClick={toggleShowCurrentPassword}
            />
          )
        }
        placeholder={"Current password"}
        value={currentPassword}
        isValid={isCurrentPasswordValid}
        onChange={onCurrentPasswordChange}
        onBlur={onCurrentPasswordBlur}
        hasError={currentPasswordHasError}
        errorMessage={`${
          currentPassword
            ? "More than 5 characters for a password"
            : "Please provide your password"
        }`}
      />
      {/* password 1 */}
      <Input
        label={"New Password"}
        type={`${!showPassword ? "password" : "text"}`}
        name="password"
        icon={
          showPassword ? (
            <BsEye className="icon clickable" onClick={toggleShowPassword} />
          ) : (
            <BsEyeSlash
              className="icon clickable"
              onClick={toggleShowPassword}
            />
          )
        }
        placeholder={"New password"}
        value={password}
        isValid={isPasswordValid}
        onChange={onPasswordChange}
        onBlur={onPasswordBlur}
        hasError={passwordHasError}
        errorMessage={`${
          password
            ? "More than 5 characters for a password"
            : "Please provide a new password"
        }`}
      />
      {/* password 2 */}
      <Input
        label={"Confirm Password"}
        type={`${!showPassword2 ? "password" : "text"}`}
        name="password"
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
            ? "Your new password did not match."
            : "Please confirm your password."
        }`}
      />
      <Form.Group>
        <Button type="submit" variant="success" disabled={formHasError || isLoading}>
          Save password
        </Button>
      </Form.Group>
    </Form>
  );
};

export default PasswordChangeForm;
