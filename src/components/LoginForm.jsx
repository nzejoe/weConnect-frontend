import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

const LoginForm = () => {
  return (
    <div >
      <Form>
        <FormGroup className="mb-3">
          <FormControl
            type="email"
            placeholder="Email"
            className="form-control-lg"
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <FormControl
            type="password"
            placeholder="Password"
            className="form-control-lg"
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Button type="submit" variant="primary" className="w-100 btn-md">
            Log in
          </Button>
        </FormGroup>
      </Form>
      <div className="text-center mb-3">
        <Link to="/" className="text-center">
          Forgot password?
        </Link>
      </div>
      <hr />
      <div className="text-center mt-3">
        <Button variant='success' as={Link} to="/" className="text-center btn-lg">
         Create new account
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
