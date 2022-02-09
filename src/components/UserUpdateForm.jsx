import React, { useState, useEffect, useContext } from "react";
import { Form, Button, Image, Alert } from "react-bootstrap";
import axios from "axios";

import { AuthUserContext } from "../store/auth-user-context";
import { getProfileImage } from "../utils";
import useInput from "../hooks/use-input";
import { Input } from ".";

const UserUpdateForm = ({ isUpdateHandler }) => {
  const { user } = useContext(AuthUserContext);

  const [image, setImage] = useState(user.avatar);
  const [imageURL, setImageURL] = useState(getProfileImage(user));
  const [formIsValid, setFormIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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
  } = useInput(validateUsername, user.username);

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
  } = useInput(validateEmail, user.email);

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
  } = useInput(validate, user.first_name);

  //   LAST NAME
  const {
    value: lastname,
    isValid: isLastnameValid,
    hasError: lastnameHasError,
    onChange: onLastnameChange,
    onBlur: onLastnameBlur,
  } = useInput(validate, user.last_name);

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

  // FILE HANDLER
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // check it is an image file
    if (file.type.indexOf("image") !== -1) {
      setImage(file);
      setErrorMsg("");
      // create a URL path from image file
      setImageURL(URL.createObjectURL(file));
    } else {
      setFormIsValid(false);
      setErrorMsg("Sorry only image files allowed");
    }
  };

  // FORM SUBMIT HANDLER
  const submitHanler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      const formData = new FormData();
      formData.append('username', username)
      formData.append('email', email)
      formData.append('first_name', firstname)
      formData.append('last_name', lastname)
      formData.append('gender', user.gender)

      // check if image was uploaded
      if (image) {
        if (image.type && image.type.indexOf("image") !== -1) {
          // if image has been changed
          formData.append("avatar", image, image.name);
        }
      } else {
        formData.append("avatar", "null");
        formData.delete("avatar");
        // add extra attribute to alert the backend that image has been cleared for the post
      }

      sendRequestHander(formData);
    }
  };

  const sendRequestHander = async (data) => {
    setIsLoading(true);
    const token = JSON.parse(localStorage.getItem("weConnect_user"));

    try {
      const response = await axios({
        url: "/users/my_details/update/",
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          authorization: token ? `Bearer ${token.access_token}`: null,
        },
        data: data,
      });

      if (response.status === 200) {
        console.log(response.data);
        isUpdateHandler(false);
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
    <Form onSubmit={submitHanler} className="user-update-form">
      {/* IMAGE PREVIEWER */}
      {image && (
        <div className="m-0 m-2">
          <div className="image">
            <Image src={imageURL} />
          </div>
          <br />
          {errorMsg && (
            <Alert variant="danger" className="p-1 w-50">
              {errorMsg}
            </Alert>
          )}
          <Form.Group controlId="formFileSm">
            <Form.Label className="text-muted clickable border border-secondary rounded-pill py-1 px-3">
              Change image
            </Form.Label>
            <Form.Control
              type="file"
              hidden
              onChange={handleFileChange}
            ></Form.Control>
          </Form.Group>
        </div>
      )}
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
  );
};

export default UserUpdateForm;
