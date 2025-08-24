import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogPost from "./components/BlogPost"; // ✅ new import

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/1">Blog Post #1</Link> {/* ✅ updated link */}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Protected route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* ✅ Dynamic blog post route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
