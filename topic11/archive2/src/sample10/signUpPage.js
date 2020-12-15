import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from './authContext';


const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
      context.register(userName, password);
      setRegistered(true) 
    }

  const { from } = props.location.state || { from: { pathname: "/" } };

  if (registered === true) {
    return <Redirect to="./login" />;
  }

  return (
    <>
      <h2>SignUp page</h2>
      <p>You must register a username and password to log in </p>
      <button onClick={register}>Register</button>
    </>
  );
};

export default SignUpPage;
