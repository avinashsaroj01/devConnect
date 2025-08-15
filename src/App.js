import Navbar from "./components/Navbar";
import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Developers from "./pages/Developers";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/developers" element={<Developers />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
