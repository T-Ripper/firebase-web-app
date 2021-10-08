import { useState } from "react";
import firebaseAuth from "./FirebaseAuth";
import LoginForm from "./Components/LoginForm";
import "./App.scss";

function App() {
  const [user, setUser] = useState(null);

  firebaseAuth.subscribeToAuthChanges(setUser);

  return (
    <div className="App">
      <div className="title-row">
        <h1 className="title">Firebase Recipies</h1>
        <LoginForm existingUser={user}></LoginForm>
      </div>
    </div>
  );
}

export default App;
