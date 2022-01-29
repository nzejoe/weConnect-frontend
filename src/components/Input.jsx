import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const Input = ({
  label,
  type,
  className,
  placeholder,
  value,
  onChange,
  onBlur,
  hasError,
  errorMessage,
  icon,
}) => {
  return (
    <Form.Group className={className}>
      <Form.Label>{label}</Form.Label>
      {icon ? (
        <InputGroup>
          <Form.Control
            type={type ? type : "text"}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            isInvalid={hasError}
          ></Form.Control>
          <InputGroup.Text>{icon}</InputGroup.Text>
        </InputGroup>
      ) : (
        <Form.Control
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          isInvalid={hasError}
        ></Form.Control>
      )}
      <Form.Control.Feedback type="invalid" className="invalid-feedback">
        {errorMessage}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default Input;
