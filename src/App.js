import { useLocation } from "react-router-dom";
import "./App.css";
import { Index as Routes } from "./routes";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
