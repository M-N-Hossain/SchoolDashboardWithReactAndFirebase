import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { firebaseApp } from "../firbase";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth(firebaseApp);

  const handleSignupSubmit = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error.message);
      });

    e.preventDefault();
    console.log("Sign up with:", { name, email, password });
  };

  const handleSignupWithGoogle = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleSignupWithFacebook = (e) => {
    e.preventDefault();
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <form onSubmit={handleSignupSubmit} className="auth-form">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button className="save-btn" type="submit">
        ✍️ Sign Up
      </button>

      <div className="social-login">
        <p>Or sign up with:</p>
        <div className="social-icons">
          <button
            type="button"
            onClick={handleSignupWithGoogle}
            className="social-btn google"
          >
            <img src="../assets/google.png" alt="Google" />
            Google
          </button>
          <button
            type="button"
            onClick={handleSignupWithFacebook}
            className="social-btn facebook"
          >
            <img src="../assets/facebook.png" alt="Facebook" />
            Facebook
          </button>
        </div>
      </div>
    </form>
  );
}
