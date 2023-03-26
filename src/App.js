import "./App.css";

import {NavLink, BrowserRouter, Route, Routes } from  "react-router-dom"
import MainA from "./Components/auksas/MainA"
import MainO from "./Components/sidabras/MainO"
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