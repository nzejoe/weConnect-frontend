import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, InputGroup, Button, Row, Col } from "react-bootstrap";

const RegisterForm = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const toggleShowPassword1 = () => setShowPassword1(!showPassword1);
  const toggleShowPassword2 = () => setShowPassword2(!showPassword2);

  return (
    <div>
      <Form>
        <Row xs={2}>
          {/* username */}
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                className="form-control-lg"
              />
            </Form.Group>
          </Col>
          {/* email */}
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                className="form-control-lg"
              />
            </Form.Group>
          </Col>
        </Row>
        {/* gender */}
        <Form.Group className="mb-3">
          <Form.Select></Form.Select>
        </Form.Group>

        <Row xs={2}>
          {/* password */}
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type={`${!showPassword1 ? "password" : "text"}`}
                  placeholder="Password"
                  className="form-control-lg"
                />
                <InputGroup.Text
                  onClick={toggleShowPassword1}
                  className="bg-white"
                >
                  show
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
          {/* confirm password */}
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={`${!showPassword2 ? "password" : "text"}`}
                  placeholder="Confirm password"
                  className="form-control-lg"
                />
                <InputGroup.Text
                  onClick={toggleShowPassword2}
                  className="bg-white b-0"
                >
                  show
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Button type="submit" variant="primary" className="btn-lg">
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
  );
};

export default RegisterForm;
