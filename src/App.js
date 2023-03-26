import "./App.css";

import {NavLink, BrowserRouter, Route, Routes } from  "react-router-dom"
import MainA from "./Components/augalai/MainA"
import MainO from "./Components/obelys/MainO"
function App() {

  
  return (
    <div className="App">
    
    <BrowserRouter>
    <nav>
      <NavLink to="/" >Auksas</NavLink>
      <NavLink to="/obelys" >Sidabras</NavLink>
      </nav>
    <Routes>
      <Route path="/" element={<MainA/>}></Route>
      <Route path="/obelys" element={<MainO/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;