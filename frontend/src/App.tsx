import React from 'react';
import './App.css';
import background from "./img/VinylBG.jpg";
import Header from "./Components/Header";
import Artists from "./Pages/Artists";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      
      <BrowserRouter>
        <Header>
          <Routes>
              <Route path="/" element={<h1>Home</h1>} />
              <Route path="/Artists" element={<Artists />} />
              <Route path="/albums" element={<h1>Albums</h1>} />
              <Route path="/countries" element={<h1>Countries</h1>} />
              <Route path="/notFound" element={<h1>Not Found</h1>} />
            
          </Routes>
        </Header>
      </BrowserRouter>
       
  );
}

export default App;
