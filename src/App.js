import { useLocation } from "react-router-dom";
import "./App.css";
import { Index as Routes } from "./routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./features/usersSlice";
import { fetchPosts } from "./features/postsSlice";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
