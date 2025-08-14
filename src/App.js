
 import Navbar from "./components/Navbar";
 import  './App.css'
 import { Router,Routes,Route } from "react-router-dom";
 import Home from "./pages/Home";
 import Developers from "./pages/Developers";
 import Login from "./pages/Login";
 import Register from "./pages/Register";
function App() {
  return (
    <div className="App">
       
        <Navbar/>
        
      <Routes>
       
       <Route  path="/" element={<Home/>}/>
       <Route  path="/login" element={<Login/>}/>
       <Route  path="/register" element={<Register/>}/>
       <Route  path="/developers" element={<Developers/>}/>
       
      </Routes>
        

    </div>
  );
}

export default App;
