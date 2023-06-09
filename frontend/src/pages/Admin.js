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
    <path d="M28.1739 115.826V144H0V115.826H28.1739Z" fill="white" />
    <path d="M115.826 115.826V144H144V115.826H115.826Z" fill="white" />
    <path d="M56.3477 87.6523V115.826H28.1738V87.6523H56.3477Z" fill="white" />
    <path d="M87.6523 87.6523V115.826H115.826V87.6523H87.6523Z" fill="white" />
    <path d="M87.6525 56.3477V87.652H56.3481V56.3477H87.6525Z" fill="white" />
    <path d="M56.348 56.3477V87.652H87.6523V56.3477H56.348Z" fill="white" />
    <path d="M115.826 28.1738V56.3477H87.6523V28.1738H115.826Z" fill="white" />
    <path d="M28.1742 28.1738V56.3477H56.3481V28.1738H28.1742Z" fill="white" />
    <path d="M144 0V28.1739H115.826V0H144Z" fill="white" />
    <path d="M-7.43866e-05 0V28.1739H28.1738V0H-7.43866e-05Z" fill="white" />
  </svg>
);
const Plusicon = (
  <svg
    className="plus_icon1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
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
    <path d="M4.10156 0V24V48" stroke="white" stroke-width="7" />
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
