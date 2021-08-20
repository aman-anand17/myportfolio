import Navbar from "./Navbar.js"
import Mypages from "./Mypages.js"
import { useState } from "react";
import Mobilenav from "./Mobilenav.js";
import './App.css';

function App() {
  const[isOn,setIsOn] = useState(false);
  return (
    <div className="App">
      <span className={`App-list`}>
      <svg onClick={()=>{setIsOn(!isOn)}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
         <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>

      </span>
      <Navbar setIs={setIsOn} toOn={isOn}/>
      <Mypages/>
      <Mobilenav></Mobilenav>
      
    </div>
  );
}

export default App;
