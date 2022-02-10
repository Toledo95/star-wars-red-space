import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Character from './components/Character';
import NotFound from './components/NotFound';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/info"  element={<Info />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
