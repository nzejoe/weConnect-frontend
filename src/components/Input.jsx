import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const Input = ({
  label,
  type,
  name,
  placeholder,
  value,
  isValid,
  onChange,
  onBlur,
  hasError,
  errorMessage,
  icon,
}) => {
  return (
    <>
      {icon ? (
        <Form.Group className="mb-2">
          <Form.Label>{label}</Form.Label>
          <InputGroup>
            <Form.Control
              type={type ? type : "text"}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              isValid={isValid}
              isInvalid={hasError}
            ></Form.Control>
            <InputGroup.Text className="bg-white b-0">{icon}</InputGroup.Text>
            <Form.Control.Feedback
              type="invalid"
              className="invalid-feedback mb-2"
            >
              {errorMessage}
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      ) : (
        <Form.Group className="mb-2">
          <Form.Label>{label}</Form.Label>
          <Form.Control
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            isValid={isValid}
            isInvalid={hasError}
          ></Form.Control>
          <Form.Control.Feedback
            type="invalid"
            className="invalid-feedback mb-2"
          >
            {errorMessage}
          </Form.Control.Feedback>
        </Form.Group>
      )}
    </>
  );
};

export default Input;
