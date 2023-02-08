import "./App.css";
import LoginButton from "./LoginButton";
import Logout from "./Logout";
import Profile from "./Profile";
import Navbar from "./simple_with_menu_button_on_left";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import FooterBar from "./FooterBar"
import Ask1 from "./pages/Ask1";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginButton />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/que-es-nodejs" element={<Ask1 />} />
          </Routes>
          <FooterBar />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
