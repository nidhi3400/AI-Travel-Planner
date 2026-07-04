import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import GenerateTrip from "./pages/GenerateTrip";
import TripHistory from "./pages/TripHistory";
import "./styles/Layout.css";

function App() {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar
          theme={theme}
          setTheme={setTheme}
        />

        <div className="content">
          <Routes>
            <Route path="/" element={<GenerateTrip />} />
            <Route path="/history" element={<TripHistory />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;