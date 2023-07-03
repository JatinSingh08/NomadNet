import "./App.css";
import { Header, Menubar, SuggestedUsers } from "./components";
import { Home } from "./page";
import { Index as Routes } from "./routes";

function App() {
  return (
    <div>
      {/* <div className="App card">
        <Header />
        <div className="grid w-full">
          <Menubar />
          <Home />
          <SuggestedUsers />
        </div>
      </div> */}
      <Routes />
    </div>
  );
}

export default App;
