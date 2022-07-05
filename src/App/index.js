import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import Login from "../pages/Authentication/Login/index";
import Signup from "../pages/Authentication/Signup/index";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element= {<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;