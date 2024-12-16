import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebaseConfig"; // Adjust the path as necessary
import "./GoogleLogin.css"; // Import CSS for styling

const GoogleLogin = ({ onLoginSuccess }) => {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider); // Use the exported `auth` instance
      const user = result.user;
      onLoginSuccess({
        name: user.displayName,
        email: user.email,
        picture: user.photoURL,
      });
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <button onClick={handleLogin} className="google-login-button">
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_"G"_logo.svg'
        alt="Google Logo"
        className="google-icon"
      />
      Login with Google
    </button>
  );
};

export default GoogleLogin;
