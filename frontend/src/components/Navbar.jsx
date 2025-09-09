import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // check token when Navbar mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    setIsLoggedIn(false);
    navigate("/login"); // redirect to login
  };

  return (
    <nav className="fixed top-0 w-full bg-blue-600 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="font-bold text-lg">
          🔐 Intrusion Detection System
        </div>

        {/* Links */}
        <ul className="flex gap-6">
          {!isLoggedIn ? (
            <>
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">AboutUs</Link></li>
              <li><Link to="/login" className="hover:underline">Login</Link></li>
              <li><Link to="/register" className="hover:underline">Register</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/predict" className="hover:underline">Predict</Link></li>
              <li><Link to="/upload" className="hover:underline">Upload</Link></li>
              <li>
                <button onClick={handleLogout} className="hover:underline">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
