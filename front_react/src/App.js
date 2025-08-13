import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
import Home from './pages/Home';
import Basic from './pages/Basic';
import Advanced from './pages/Advanced';
import Analysis from './pages/Analysis';
import Environment from './pages/Environment';
import Info from './pages/Info';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basic" element={<Basic />} />
            <Route path="/advanced" element={<Advanced />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/environment" element={<Environment />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </main>
        <BottomNavigation />
      </div>
    </Router>
  );
}

export default App;
