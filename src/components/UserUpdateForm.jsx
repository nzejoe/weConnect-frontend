import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import useInput from "../hooks/use-input";
import { Input } from ".";

const UserUpdateForm = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  // check if all input is valid
  const formValid =
    isUsernameValid && isEmailValid && isFirstnameValid && isLastnameValid;

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
    if (formIsValid) {
      const data = {
        username,
        email: email.toLowerCase(),
        first_name: firstname,
        last_name: lastname,
        avatar: null,
      };
      console.log(data)
      // sendRequestHander(data);
    }
  };

  const sendRequestHander = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios({
        url: "/users/register/",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        data: data,
      });

      if (response.status === 200) {
        console.log(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      const err = { ...error };
      const errorData = err.response.data;
      console.log(errorData);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={submitHanler}>
        {/* username */}
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
        {/* email */}
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
            email ? "Please enter a valid email" : "Email is a required field"
          }`}
        />

        {/* first name */}
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

        {/* last name */}
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
        {/* gender */}

        {/* submit button */}
        <Form.Group className="mb-3 w-100">
          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-100"
            disabled={!formIsValid || isLoading}
          >
            Save
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default UserUpdateForm;
