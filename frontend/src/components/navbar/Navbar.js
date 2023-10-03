import "./navbar.css";

import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import logout from "../../images/logout.png";

<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/v4-shims.min.js" integrity="sha512-6n3X18GAJomziz6HVPbmyBOEZeoB8+unwEBTRXFs3IZTRYYCkbXNAWNV68uHujamEvDBqaGe2FTW19o81h1/RA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

const Navbar = ({role}) => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser, logout } = useContext(AuthContext);

  //   const userId = currentUser.id
  //   const { isLoading, error, data } = useQuery(["user"], () =>
  //   makeRequest.get("/users/find/" + userId).then((res) => {
  //     return res.data;
  //   })
  // );
  //   console.log(data)

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      // setErr(err.response.data)
      console.log(err);
    }
  };

  return (
    <>
      <nav className="navbar">
        {role === 'admin' &&
        <div className="navbar-left">
          <button className="report-button" onClick={()=>navigate("/report")}>Report</button>
          <button className="report-button" onClick={()=>navigate("/users")}>Users</button>
        </div>
        }
        <div className="navbar-left">
          <button className="report-button" onClick={()=>navigate("/")}>Home</button>
        </div>

        <div className="navbar-center">
          <h1 className="name">SATELLITE MART</h1>
        </div>
       
        <div className="navbar-right">
        <h1 className="name1">Welcome, {currentUser.name}</h1>
          <button
            className="logout-button"
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
            // data-download="logout"
            data-hover="add friend"
          >
           <div><img
              src={logout}
              alt=""
              style={{color:"black"}}
            /></div>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
