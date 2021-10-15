import { useState } from "react";
import firebaseAuth from "../FirebaseAuth";

function LoginForm({ existingUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await firebaseAuth.loginUser(username, password);
      setUsername("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  }
  function handleLogout() {
    firebaseAuth.logoutUser();
  }

  return (
    <div className="login-form-container">
      {existingUser ? (
        <div className="row">
          <h2>Welcome,{existingUser.email}</h2>
          <button
            type="button"
            className="primary-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="login-form">
          <label className="input-label login-label">
            Username(email):
            <input
              type="email"
              required
              value="email@email.com"
              onChange={(e) => setUsername(e.target.value)}
              className="input-text"
            />
          </label>
          <label className="input-label login-label">
            Password(password):
            <input
              type="password"
              required
              value="password"
              onChange={(e) => setPassword(e.target.value)}
              className="input-text"
            />
          </label>
          <div className="button-box">
            <button className="primary-button">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
