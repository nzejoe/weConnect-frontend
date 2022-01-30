import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import { BsEyeSlash, BsEye } from "react-icons/bs";

const LoginForm = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <Form>
        <FormGroup className="mb-3">
          <FormControl
            type="email"
            placeholder="Email"
            className="form-control-lg"
          />
        </FormGroup>
        <InputGroup className="mb-3">
          <FormControl
            type={`${!show ? 'password' : 'text'}`}
            placeholder="Password"
            className="form-control-lg"
          />
          <InputGroup.Text onClick={toggleShow} className="bg-white">
            {show ? <BsEye className="clickable"/> : <BsEyeSlash className="clickable"/> }
          </InputGroup.Text>
        </InputGroup>
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
