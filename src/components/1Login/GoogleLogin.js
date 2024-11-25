import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebaseConfig"; // Adjust the path as necessary

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
    <button onClick={handleLogin} className="login-button">
      Login with Google
    </button>
  );
};

export default GoogleLogin;
