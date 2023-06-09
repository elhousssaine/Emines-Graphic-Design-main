import React, { useEffect, useState } from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../reducers/authReducers";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { setlight, setdark } from "../reducers/themeReducer";

const tlines = (
  <svg
    width="144"
    height="144"
    viewBox="0 0 144 144"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- SVG paths here -->
  </svg>
);

const Plusicon = (
  <svg
    className="plus_icon1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <!-- SVG paths here -->
  </svg>
);

const HL = (
  <svg
    className="plus_icon1"
    width="8"
    height="48"
    viewBox="0 0 8 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- SVG paths here -->
  </svg>
);

const Admin = () => {
  const DISPLAY_LIMIT_PROJECT = 6;
  const DISPLAY_LIMIT_BLOG = 6;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const base_url = "https://egx.onrender.com";
  const api_url_project = `https://egx.onrender.com/api/projects/getbyowner/${userInfo.id}`;
  const api_url_blog = "https://egx.onrender.com/api/blogs/getbyonwer/" + userInfo.id;

  useEffect(() => {
    dispatch(setdark());
    const apiClient = axios.create({
      baseURL: 'https://egx.onrender.com', // Replace with your backend API URL
    });

    const getProject = async () => {
      setLoading(true);
      try {
        const resp = await apiClient.get('/api/project');
        setProjects(resp.data);

        const resp2 = await apiClient.get('/api/blog');
        setBlogs(resp2.data);
      } catch (error) {
        console.error('Error fetching project:', error);
        // Handle the error appropriately
      } finally {
        setLoading(false);
      }
    };

    getProject();
  }, []); // <-- Add closing parenthesis here

  if (!userInfo.isAdmin) {
    if (projects.length > 0 || !loading) {
      return (
        <div className="admin_page">
          {/* Rest of the JSX code */}
        </div>
      );
    } else {
      return <div>Still loading</div>;
    }
  } else {
    return (
      <div>
        {/* Rest of the JSX code */}
      </div>
    );
  }
};

export default Admin;
