import Navbar from "./components/Navbar";
import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Developers from "./pages/Developers";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import DeveloperDetails from "./pages/DeveloperDetails";
import DeveloperPosts from "./pages/DeveloperPosts";
function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/developers" element={<Developers />} />
          <Route exact path="/developers/:id" element={<DeveloperDetails />} />
          <Route exact path="/posts/:id" element={<DeveloperPosts/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
