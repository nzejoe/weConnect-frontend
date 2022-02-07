import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Card, Button } from "react-bootstrap";
import { UnauthenticatedUser } from "../components";

import { Input } from "../components";
import useInput from "../hooks/use-input";

const PasswordResetPage = () => {
  const [formValid, setFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {email: value}
    console.log(data)
  }

  return (
    <UnauthenticatedUser className="password-reset-page">
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
    </UnauthenticatedUser>
  );
};

export default PasswordResetPage;
