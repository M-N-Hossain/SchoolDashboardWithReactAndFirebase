import React, { useState } from "react";
import "./../styles/auth.css";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-box">
        {showLogin ? (
          <>
            <h2>Welcome Back!</h2>
            <p>Please log in to continue</p>
            <LoginForm setShowLogin={() => setShowLogin(false)} />
            <p className="switch-text">
              Don't have an account?{" "}
              <span onClick={() => setShowLogin(false)}>Sign Up</span>
            </p>
          </>
        ) : (
          <>
            <h2>Join Us!</h2>
            <p>Create an account to get started</p>
            <SignupForm setShowSignup={() => setShowLogin(true)} />
            <p className="switch-text">
              Already have an account?{" "}
              <span onClick={() => setShowLogin(true)}>Log In</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
