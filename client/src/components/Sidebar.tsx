import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2>✈️ Planner</h2>

      <Link
        className={
          location.pathname === "/"
            ? "nav-link active"
            : "nav-link"
        }
        to="/"
      >
        Generate Trip
      </Link>

      <Link
        className={
          location.pathname === "/history"
            ? "nav-link active"
            : "nav-link"
        }
        to="/history"
      >
        Trip History
      </Link>
    </div>
  );
}