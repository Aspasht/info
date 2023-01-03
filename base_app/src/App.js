import React from "react";
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Buttons from './Components/Buttons/Buttons.js'
import  Home  from "./Components/common/Home.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
