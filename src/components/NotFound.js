import React from 'react';
import { Button } from 'react-bootstrap';

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      {/* <img
        src="https://via.placeholder.com/300x200?text=404+Error"
        alt="404 Not Found"
        className="mb-4"
        style={{ maxWidth: '100%', height: 'auto' }}
      /> */}
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Oops! Page Not Found</h2>
      <p className="mb-4 text-muted">
        The page you're looking for doesn't exist or an error occurred.
        Please go back to the homepage or try again later.
      </p>
      <Button href="/" variant="primary" className="px-4 py-2">
        Go to Home
      </Button>
    </div>
  );
};

export default NotFound;
