import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import facebookIcon from "../assets/facebook.png";
import googleIcon from "../assets/google.png";
import { firebaseApp } from "../firbase";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth(firebaseApp);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <form onSubmit={handleLoginSubmit} className="auth-form">
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
        🔑 Login
      </button>

      <div className="social-login">
        <p>Or log in with:</p>
        <div className="social-icons">
          <button className="social-btn google">
            <img src={googleIcon} alt="Google" />
            Google
          </button>
          <button className="social-btn facebook">
            <img src={facebookIcon} alt="Facebook" />
            Facebook
          </button>
        </div>
      </div>
    </form>
  );
}
