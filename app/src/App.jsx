import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState("");
  
  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location]);

  return (
    <div className={`app-container ${currentRoute.replace('/', '')}`}>
      <Navbar />
      <div className="contents">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;