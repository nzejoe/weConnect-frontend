import React from 'react';
import { Card } from 'react-bootstrap';
import { UnauthenticatedUser, RegisterForm } from '../components';

const RegisterPage = () => {
  return (
    <UnauthenticatedUser>
      <Card className="register-form p-3 shadow-lg">
        <RegisterForm/>
      </Card>
    </UnauthenticatedUser>
  );
};

export default RegisterPage;
