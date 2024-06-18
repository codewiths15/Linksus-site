// import Login from "./components/Freelancer/Userauth/Login";
import "./App.css";
import Signup from "./components/Freelancer/Userauth/Signup";
import Main from "./components/Freelancer/Main";
import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      {/* <Login/>  */}
      {/* <button onClick={signupuser}>sign up</button> */}
       {/* <Signup /> */}
      <Main/> 
    </div>
  );
}

export default App;
