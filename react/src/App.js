import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Forgetpassword from './Components/ForgetPassword/Forgetpassword';
import Dasboard from './Components/Dashboard/Dasboard';
import Profile from './Components/Profile/Profile';
import ProtectedOutlet from './Protected';



function App() {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<Forgetpassword />} />
        <Route element={<ProtectedOutlet />}>
          <Route path="/dasboard" element={<Dasboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
