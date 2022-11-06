import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { userlogout } from "../../Slice/AuthSlice";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.auth);

  const handleLogout = () => {
    localStorage.removeItem("users");
    localStorage.clear();
    dispatch(userlogout());
    toast.info('Logout Successsfully')
    navigate("/");
  };

  const profileHandler = async () => {
    navigate(`/profile`);
  };

  return (
    <>
      <nav class="navbar">
        <div class="logo">
          <Link class="nav-link active" to="/dasboard" style={{ color: "white" }}>
            &nbsp;&nbsp;
            {" "} User Management System
          </Link>
        </div>

        {userdata.isLoggedIn ? (
          <div>
            <button className="btn btn-md btn-outline-light m-2" onClick={profileHandler}>
              Profile
              {/* <Link class="nav-link active" to="/profile">Profile</Link> */}
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-outline-light" onClick={handleLogout}>
              Logout{" "}
            </button>
            &nbsp;&nbsp;
          </div>
        ) : (
          <div class="menu">
            <Link class="nav-link active" to="/">
              <button className="btn btn-outline-light" name="home">
                Home
              </button>
            </Link>
            <Link class="nav-link active" to="/signup">
              <button className="btn btn-outline-light" name="signup">
                Signup
              </button>
            </Link>
            <Link class="nav-link active" to="/login">
              <button className="btn btn-outline-light" name="login">
                Login
              </button>
            </Link>
            &nbsp;
          </div>
        )}
      </nav>
    </>
  );
}
