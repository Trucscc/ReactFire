import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

import styles from "./Signup.module.css";
import { Toast } from "react-bootstrap";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: ""
  });
  const [error, setError] = useState("");
  
  const validateEmail = (email) => {   // 'Regular Expressions.' Đây là phương thức kiểm tra Email Return có đúng cách không?
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
  
  
  const handleSubmit = () => {
    if (!values.name || !values.email || !values.pass) {
      setError("Fill all fields");
      return;
    }
    const isValidEmail = validateEmail(values.email);
    if(!isValidEmail){                // nếu không đúng sẻ hiện ra cảnh báo, hoặc (isValidEmail===false)
          //Toast.error('invalid Email');
          setError("Invalid Email");
          //toast.success('Email success');
          //toast.info('Hiện thông tin');
          //toast.warning('Cảnh báo');
          //alert('invalid email');
          return;
      }
    if(!values.pass){
        //Toast.error('invalid Password');
        setError("Invalid Password");
        return;
      }
    setError("");

    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async(res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/login");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Firebase Auth Signup</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{error}</b>
          <button onClick={handleSubmit}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
