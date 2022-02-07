import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Card, Button, Alert, Row, Col } from "react-bootstrap";
import axios from "axios";

import { UnauthenticatedUser } from "../components";

import { Input } from "../components";
import useInput from "../hooks/use-input";

const PasswordResetPage = () => {
  const [formValid, setFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [resetDone, setResetDone] = useState(false);

  //   EMAIL
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const { value, onChange, onBlur, isValid, hasError } =
    useInput(validateEmail);

  useEffect(() => {
    if (isValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [isValid]);

  const submitHandler = async(e) => {
    e.preventDefault();
    if(formValid){
      const data = { email: value };
      setIsLoading(true)
      try {
        const response = await axios({
          url: '/users/password_reset/',
          method: 'POST',
          headers:{
            'Content-type': 'application/json'
          },
          data: data,
        })
        if(response.status === 200){
          setIsLoading(false);
          setResetDone(true);
          console.log(response.data)
        }
      } catch (error) {
        const err = {...error};
        const errorData = err.response.data;
        if (errorData.email) setError({ message: errorData.email[0] });
        console.log(errorData)
        setIsLoading(false);
      }
    }
    
  }

  return (
    <UnauthenticatedUser className="password-reset-page">
      {!resetDone ? (
        <Card className="password-reset-form p-3">
          <h5 className="py-3">Password reset</h5>
          <p className="form__text mb-0">
            Please enter a valid email address linked to your account.
          </p>
          <Form className="mb-4" onSubmit={submitHandler}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              hasError={hasError}
              errorMessage={
                value
                  ? "Invalid email address."
                  : "Your email address is required."
              }
            />
            <Form.Group>
              {error && <Alert variant="danger">{error.message}</Alert>}
              <Button
                type="submit"
                className="w-100"
                disabled={!formValid || isLoading}
              >
                Send request
              </Button>
            </Form.Group>
          </Form>
          <hr />
          <div className="text-muted">
            Have passord?{" "}
            <Link to="/account/login/" className="btn btn-link">
              Log in
            </Link>
          </div>
        </Card>
      ) : (
        <Row xs={1} md={2}>
          <Col md="auto">
            <Alert variant="success">
              <h5>Password reset done!</h5>
              <p>
                A link on how to set a new password has been sent to {value}.
              </p>
            </Alert>
          </Col>
        </Row>
      )}
    </UnauthenticatedUser>
  );
};

export default PasswordResetPage;
