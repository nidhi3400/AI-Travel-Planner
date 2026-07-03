import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import GenerateTrip from "./pages/GenerateTrip";
import TripHistory from "./pages/TripHistory";
import "./styles/Layout.css";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar />

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