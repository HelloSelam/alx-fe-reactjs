import { Navigate } from "react-router-dom";

// Fake auth simulation
const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true";
};

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return children;
}