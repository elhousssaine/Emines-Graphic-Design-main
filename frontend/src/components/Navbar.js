import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../reducers/authReducers";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { isAuthenticated, userInfo, userToken } = useSelector(
    (state) => state.auth
  );
  const { light } = useSelector((state) => state.light);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //using the navbar to manage token
  useEffect(() => {
    if (userToken) {
      setAuthToken(userToken);
      const decoded = jwt_decode(userToken);
      dispatch(
        setCurrentUser({
          token: userToken,
          success: decoded.success,
          userdata: {
            id: decoded.id,
            name: decoded.name,
            isAdmin: decoded.isAdmin,
            email: decoded.email,
          },
        })
      );
      // Check for expired token
      const currentTime = Date.now() / 1000; // to get in milliseconds
      if (decoded.exp < currentTime) {
        // Logout user
        dispatch(logoutUser());
        // Redirect to login
        navigate("/login");
      }
    }
  }, [userToken]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: light ? "white" : "#000000",
        
      }}
    >
      
        <NavLink
          to="/homex"
          id="LogoText"
          className="navbar-brand"
          style={{ color: light ? "#000000" : "white" }}
        >
          EGX
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav d-flex ms-auto nav-list">
            <li
              className="nav-item p-2"
            >
              <NavLink
                to="/udc"
                className="nav-link active"
                style={{ color: light ? "#000000" : "white" }}
              >
                Design Club
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink
                to="/portfolio"
                className="nav-link active"
                style={{ color: light ? "#000000" : "white" }}
              >
                Portfolio
              </NavLink>
            </li>
            <li
              className="nav-item p-2"

        
            >
              <NavLink
                to="/home"
                className="nav-link active"
                style={{ color: light ? "#000000" : "white" }}
              >
                Contact
              </NavLink>
            </li>
            {!isAuthenticated && (
              <li className="nav-item  p-2">
                <NavLink
                  to="/login"
                  className="nav-link active"
                  style={{ color: light ? "#000000" : "white" }}
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;
