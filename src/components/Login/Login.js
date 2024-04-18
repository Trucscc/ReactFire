import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import GoogleButton from "react-google-button";
import styles from "./Login.module.css";
import { useUserAuth } from "../context/UserAuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-bootstrap";
import { get } from "firebase/database";

function Login() {
  const navigate = useNavigate();
  //const { googleSignIn } = useUserAuth();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) =>  {
    e.preventDefault();
    if (!values.email || !values.pass) {
      setError("Fill all fields");
      return;
    }
     
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
           let uuid = res.user.uid
        console.log('>>> ', uuid)
        navigate("/home");
      })
      .catch((err) => {
        setError(err.message);
        alert(err.message);
      });
  };

  // const handleGoogleSignIn = async (e) => {
  //       e.preventDefault();
  //       try {
  //           await googleSignIn();
  //           navigate("/home");
  //       }catch(error) {
  //           console.log(error.message);
  //        }
  // }

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Firebase Auth Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{error}</b>
          <button onClick={handleSubmit}>
            Login
          </button>
          {/* <div>
            <GoogleButton
                className="g-btn"
                type="dark"
                onClick={handleGoogleSignIn}
            />
          </div> */}
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
