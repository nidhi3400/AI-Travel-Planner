import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

interface SidebarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export default function Sidebar({ theme, setTheme }: SidebarProps) {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2 className="title">✈️ Planner</h2>
      <div className="theme-switch">
  <span>☀️ <b>Light</b></span>

  <label className="switch">
    <input
      type="checkbox"
      checked={theme === "dark"}
      onChange={() =>
        setTheme(
          theme === "light"
            ? "dark"
            : "light"
        )
      }
    />

    <span className="slider"></span>
  </label>

  <span>🌙<b>Dark</b></span>
</div>
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