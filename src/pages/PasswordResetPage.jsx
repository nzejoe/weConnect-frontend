import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Card, Button } from 'react-bootstrap'
import { UnauthenticatedUser } from '../components';

const PasswordResetPage = () => {
  return (
    <UnauthenticatedUser className="password-reset-page">
      <Card className="password-reset-form p-3">
        <h5 className="py-3">Password reset</h5>
        <p class="form__text">
          Please enter a valid email address linked to your account.
        </p>
        <Form className="mb-4">
          <Form.Group className="mb-3">
            <Form.Control placeholder="Email" size='lg'/>
          </Form.Group>
          <Form.Group>
            <Button type="submit" className="w-100">
              Send request
            </Button>
          </Form.Group>
        </Form>
        <hr />
        <div className='text-muted'>
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
