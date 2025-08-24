import { Navigate } from "react-router-dom";

// ✅ simple auth hook
function useAuth() {
  // For demo purposes, we simulate authentication with localStorage
  const user = localStorage.getItem("user");
  return { isAuthenticated: !!user };
}

export default function ProtectedRoute({ children }) {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
