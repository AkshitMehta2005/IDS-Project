import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // agar token nahi hai → login page pe bhej do
    return <Navigate to="/login" replace />;
  }

  return children; // agar token hai → page dikhado
};

export default ProtectedRoute;
