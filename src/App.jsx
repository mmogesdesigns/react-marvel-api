import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from"./Home"
import BrowseCharacters from "./BrowseCharacters";
import CharacterDetail from "./components/CharacterDetail";

import Error from "./Error";

function App() {
 

  return (
    <Routes>
    <div className="app-container">
      <Route path="/" element={<Home/>}/>
      <Route path="/browse-characters" element={<BrowseCharacters/>}/>
      <Route path="/character-details/:characterID" element={<CharacterDetail/>}/>
      <Route path="*" element={<Error/>}/>
      
    </div>
    </Routes>
  );
}

export default App;
