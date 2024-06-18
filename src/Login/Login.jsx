import "./Login.css";
import infinity from "../assets/infinity.png";
import { useState } from "react";
import warning from "../assets/warning.png";

import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [NewUser, setNewUser] = useState(true);

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [error, seterror] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    seterror(false);

    if (NewUser) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          localStorage.setItem("username", username);
        })
        .catch((error) => {
          seterror(true);
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password).catch((error) => {
        seterror(true);
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
    }
  };

  return (
    <div className="login-page">
      <header>
        <span>
          from <i>Infinity Studios</i>
        </span>
      </header>

      <img className="logo" src={infinity} alt="" />

      <h2 className="title">
        Sub-Min <br />
        Dashboard
      </h2>

      <form onSubmit={submit}>
        {NewUser && (
          <div className="username">
            <input
              onChange={(e) => setusername(e.target.value)}
              type="username"
              id="username"
              required
            />
            <label htmlFor="username">username</label>
          </div>
        )}

        <div className="email">
          <input
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            id="email"
            required
          />
          <label htmlFor="email">email</label>
        </div>

        <div className="password">
          <input
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            id="password"
            required
          />
          <label htmlFor="password">password</label>
        </div>

        {error && <img src={warning} alt="" className="status" />}

        {error && <span className="error">Process Failed</span>}
        {error && <span className="error">{ErrorMsg}</span>}

        <button type="submit">{NewUser ? "Sign Up" : "Log In"}</button>

        {NewUser ? (
          <span className="user-stat">
            Already have an account?{" "}
            <b
              onClick={() => {
                setNewUser(false);
                seterror(false);
              }}
            >
              Log In
            </b>
          </span>
        ) : (
          <span className="user-stat">
            Don't have an account?{" "}
            <b
              onClick={() => {
                setNewUser(true);
                seterror(false);
              }}
            >
              Sign Up
            </b>
          </span>
        )}
      </form>
    </div>
  );
};

export default Login;
