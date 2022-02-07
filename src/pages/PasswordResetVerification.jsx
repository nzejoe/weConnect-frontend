import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Row, Col, Alert, Spinner } from "react-bootstrap";
import axios from "axios";

import { UnauthenticatedUser } from "../components";

const PasswordResetVerification = () => {
  const { uidb64, token } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isLinkValid, setIsLinkValid] = useState(true);

  const navigate = useNavigate()

  useEffect(() => {
    const checkLink = async () => {
      setIsLoading(true);
      try {
        const response = await axios({
          url: `/users/password_reset_verification/${uidb64}/${token}/`,
          method: "POST",
        });
        if (response.status === 200) {
          setIsLinkValid(true);
          setIsLoading(false);
          sessionStorage.setItem('password_reset', true);
          navigate("/account/password_reset_complete/", {replace: true});
        }
      } catch (error) {
        console.log(error);
        setIsLinkValid(false);
        setIsLoading(false);
      }
    };

    checkLink();
  }, [uidb64, token, navigate]);

  return (
    <UnauthenticatedUser>
      {!isLoading ? (
        <Row xs={1} md={3} className="justify-content-center w-100">
          <Col md="auto" className="text-center">
            {isLinkValid ? (
              <Alert variant="success">
                <h6>Success</h6>
                <hr />
                <p className="mt-2">
                  Please wait...
                </p>
                <Link to="/account/login">Log in</Link>
              </Alert>
            ) : (
              <Alert variant="danger">
                <h6>Invalid link</h6>
                <hr />
                <p className="mt-2">This link may have expired or invalid.</p>
              </Alert>
            )}
          </Col>
        </Row>
      ) : (
        <div className="w-100 text-center position-relative">
          <Spinner animation="grow" className="loading" />
        </div>
      )}
    </UnauthenticatedUser>
  );
};

export default PasswordResetVerification;
