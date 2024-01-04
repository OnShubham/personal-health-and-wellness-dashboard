import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home.jsx";
import Login from "./Components/Login&Signup/Login.jsx";
import Signup from "./Components/Login&Signup/Signup.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
