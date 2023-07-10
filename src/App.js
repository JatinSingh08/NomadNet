import { useLocation } from "react-router-dom";
import "./App.css";
import { Index as Routes } from "./routes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/usersSlice";
import { fetchPosts } from "./features/postsSlice";
import { authSelector } from "./features/authSlice";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { encodedToken } = useSelector(authSelector);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (encodedToken) {
      dispatch(fetchUsers());
    }
  }, [encodedToken]);

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
