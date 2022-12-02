import { useState } from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Topbar from "./components/topbar/Topbar";

function App() {
  const [nav, setNav] = useState('home');

  return (
    <div>
      <Topbar navigation={(route) => setNav(route)} />
      {nav === 'home' ?
        <Home /> :
        <Profile />
      }
    </div>
  );
}

export default App;
