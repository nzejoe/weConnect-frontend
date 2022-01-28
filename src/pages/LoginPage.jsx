import React from 'react';
import { Card } from 'react-bootstrap';
import { UnauthenticatedUser, LoginForm } from '../components';

const LoginPage = () => {
  return (
    <UnauthenticatedUser>
      <Card className="user-form p-3 shadow-lg">
        <LoginForm />
      </Card>
    </UnauthenticatedUser>
  );
};

export default LoginPage;
