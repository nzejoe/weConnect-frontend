import React from 'react';
import { Form, Card } from 'react-bootstrap'
import { UnauthenticatedUser } from '../components';

const PasswordResetPage = () => {
  return <UnauthenticatedUser>
      <Card className='password-reset-form p-3'>
          <Form>
              <Form.Group>
                  <Form.Control placeholder='Email'/>
              </Form.Group>
          </Form>
      </Card>
  </UnauthenticatedUser>;
};

export default PasswordResetPage;
