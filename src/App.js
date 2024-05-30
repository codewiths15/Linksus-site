import Login from "./components/Freelancer/Userauth/Login";
import './App.css'
import Signup from "./components/Freelancer/Userauth/Signup";
import Navigation from "./components/Freelancer/Sidebar/Navigation";
import Task from "./components/Freelancer/FindTask/Task";
import Checkbox from "./components/Freelancer/FindTask/Checkbox";
import Descript from "./components/Freelancer/TaskDescript/Descript";
import Apply from "./components/Freelancer/ApplyTask/Apply";
import History from "./components/Freelancer/ApplicationHistory/History";
import Profile from "./components/Freelancer/UserProfile/Profile";
import About from "./components/Company/About/About";
import Chat from "./components/Misc/Chat"
import TaskListing from "./components/Company/TaskListing/TaskListing";
import PostTask from "./components/Company/PostTask/PostTask";

function App() {
  return (
    <div className="App">
      {/* <PostTask /> */}
    <TaskListing />
    {/* <Login/>  */}
    {/* <About /> */}
    {/* <Chat /> */}
    {/* <Signup/>  */}
    {/* <Navigation/> */}
    {/* <Task/> */}
    {/* <Descript/> */}
    {/* <Apply/> */}
    {/* <History/> */}
    {/* <Profile/> */}
    </div>
  );
}

export default App;
