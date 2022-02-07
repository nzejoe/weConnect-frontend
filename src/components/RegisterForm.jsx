import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import axios from "axios";

import useInput from "../hooks/use-input";
import { Input } from ".";

const RegisterForm = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [gender, setGender] = useState('male');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // hook
  //   USERNAME
  const validateUsername = (username) => {
    return username.length > 2;
  };
  const {
    value: username,
    isValid: isUsernameValid,
    hasError: usernameHasError,
    onChange: onUsernameChange,
    onBlur: onUsernameBlur,
  } = useInput(validateUsername);

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

  //   FIRST NAME
  const validate = (value) => {
    return value.length !== 0;
  };
  const {
    value: firstname,
    isValid: isFirstnameValid,
    hasError: firstnameHasError,
    onChange: onFirstnameChange,
    onBlur: onFirstnameBlur,
  } = useInput(validate);

  //   LAST NAME
  const {
    value: lastname,
    isValid: isLastnameValid,
    hasError: lastnameHasError,
    onChange: onLastnameChange,
    onBlur: onLastnameBlur,
  } = useInput(validate);

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

  // GENDER
  const genderHandler = (e) => {
    setGender(e.target.value);
  }

  const toggleShowPassword1 = () => setShowPassword1(!showPassword1);
  const toggleShowPassword2 = () => setShowPassword2(!showPassword2);


  // check if all input is valid
  const formValid =
    isUsernameValid &&
    isEmailValid &&
    isFirstnameValid &&
    isLastnameValid &&
    isPasswordValid &&
    isPassword2Valid;

  useEffect(() => {
    if (formValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [formValid]);

// FORM SUBMIT HANDLER
const submitHanler = (e) => {
  e.preventDefault();
  if(formIsValid){
    const data = {
      username,
      email: email.toLowerCase(),
      first_name: firstname,
      last_name: lastname,
      password,
      password2,
      gender,
      avatar: null,
    }
    sendRequestHander(data)
  }
};


const sendRequestHander = async(data) => {
  setIsLoading(true);
  setError(false);
  try {
    const response = await axios({
      url: '/users/register/',
      method: 'POST',
      headers:{
        'Content-type': 'application/json',
      },
      data: data,
    })

    if(response.status === 200){
      console.log(response.data);
      setSuccess(true);
      setIsLoading(false)
    }
  } catch (error) {
    const err = {...error}
    const errorData = err.response.data

    if(errorData.username){
      setError({message: errorData.username[0]})
    }

    if(errorData.email){
      setError({message: errorData.email[0]})
    }

    if (errorData.username && errorData.email) {
      setError({
        message: "account with this username and email already exists.",
      });
    }

    console.log(errorData);
    setIsLoading(false)
  }
}


  return (
    <>
      {!success ? (
        <div>
          <Form onSubmit={submitHanler}>
            <Row xs={2}>
              {/* username */}
              <Col>
                <Input
                  label={"Username"}
                  type={"text"}
                  name="username"
                  placeholder={"Username"}
                  value={username}
                  isValid={isUsernameValid}
                  onChange={onUsernameChange}
                  onBlur={onUsernameBlur}
                  hasError={usernameHasError}
                  errorMessage={`${
                    username
                      ? "More than 3 characters for a username"
                      : "Username is a required field"
                  }`}
                />
              </Col>
              {/* email */}
              <Col>
                <Input
                  label={"Email"}
                  type={"email"}
                  name="email"
                  placeholder={"Email"}
                  value={email}
                  isValid={isEmailValid}
                  onChange={onEmailChange}
                  onBlur={onEmailBlur}
                  hasError={emailHasError}
                  errorMessage={`${
                    email
                      ? "Please enter a valid email"
                      : "Email is a required field"
                  }`}
                />
              </Col>
            </Row>
            <Row xs={2}>
              {/* first name */}
              <Col>
                <Input
                  label="First name"
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  value={firstname}
                  isValid={isFirstnameValid}
                  onChange={onFirstnameChange}
                  onBlur={onFirstnameBlur}
                  hasError={firstnameHasError}
                  errorMessage={`${"First name is a required field"}`}
                />
              </Col>

              {/* last name */}
              <Col>
                <Input
                  label={"Last name"}
                  type="text"
                  name="lastname"
                  placeholder={"Last name"}
                  value={lastname}
                  isValid={isLastnameValid}
                  onChange={onLastnameChange}
                  onBlur={onLastnameBlur}
                  hasError={lastnameHasError}
                  errorMessage={`${"Last name is a required field"}`}
                />
              </Col>
            </Row>
            {/* gender */}
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                className="w-25"
                onChange={genderHandler}
                value={gender}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Select>
            </Form.Group>

            <Row xs={2}>
              {/* password */}
              <Col>
                <Input
                  label={"Password"}
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
              </Col>
              {/* confirm password */}
              <Col>
                <Input
                  label={"Confirm password"}
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
              </Col>
            </Row>
            {/* error message */}
            {error && <Alert variant="danger">{error.message}</Alert>}
            {/* submit button */}
            <Form.Group className="mb-3">
              <Button
                type="submit"
                variant="primary"
                className="btn-lg"
                disabled={!formIsValid || isLoading}
              >
                Create account
              </Button>
            </Form.Group>
          </Form>
          <div className="mb-3">
            Already have an account?
            <Link to="/account/login/" className="ms-2">
              Log in
            </Link>
          </div>
        </div>
      ) : (
        <Alert variant="success">
          <h5>Account created successfully!</h5>
          <p>
            A link on how to activate your account has been sent to {email}.
          </p>
        </Alert>
      )}
    </>
  );
};

export default RegisterForm;
