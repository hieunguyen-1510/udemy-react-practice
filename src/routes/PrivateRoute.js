import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { Alert } from "react-bootstrap";
const PrivateRoute = (props) => {
  // console.log(">>> check props: ", props);
  const { user } = useContext(UserContext);

  if (user && !user.auth) {
    return (
      <>
        <Alert variant="danger" >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            You dont't have permission to acess this route.
          </p>
        </Alert>
       
      </>
    );
  }

  return (
    <>
        {props.children}
    </>
  );
};
export default PrivateRoute;
