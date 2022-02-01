import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup, Button, Alert } from "react-bootstrap";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import axios from 'axios'

import { Input } from ".";
import useInput from "../hooks/use-input";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const [formHasError, setFormHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState({error: false, msg: ''});
  const[authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate()

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
    // isValid: isEmailValid,
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


  // this function will send request to database
  const sendLoginRequest = async(data) => {
    setLoading(true)
    try {
      const response = await axios({
        url: "auth/token",
        method: "POST",
        "Content-type": "json/application",
        data: data,
      })

      setLoginError({ error: false, msg: "" });
      const user = {
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token,
      };
      // save user access token to localstorage
      localStorage.setItem('weConnect_user', JSON.stringify(user));
      setLoading(false);
      setAuthenticated(true);
    } catch (error) {
      setLoading(false);
      const resError = { ...error }
      setLoginError({ error: true, msg: resError.response.data.error_description });
      console.log(resError.response);
    }
  }

  useEffect(() => {
    setFormHasError(emailHasError || passwordHasError);
  }, [emailHasError, passwordHasError]);

  // user authentication handler
  useEffect(()=>{
    if(authenticated){
      navigate('/', {replace: true}); // redirect to home page
    }
  },[authenticated, navigate]);

  // get client id and client secret from evironment variable
  const {REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET} = process.env;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formHasError) {
      const data = {
        username: email,
        password: password,
        grant_type: "password",
        client_id: REACT_APP_CLIENT_ID,
        client_secret: REACT_APP_CLIENT_SECRET,
      };
      
      sendLoginRequest(data);
     
    }
  };


  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
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
        {loginError.error && <Alert variant="danger" className="p-1">{loginError.msg}</Alert>}
        <FormGroup className="mb-3">
          <Button
            type="submit"
            variant="primary"
            className="w-100 btn-lg"
            disabled={loading || formHasError}
          >
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
