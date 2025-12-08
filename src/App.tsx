import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import Health from './pages/Health';
import Environment from './pages/Environment';
import Recipes from './pages/Recipes';
import Shopping from './pages/Shopping';
import BeginnerTips from './pages/BeginnerTips';
import Footer from './components/Footer';
import Activism from './pages/Activism';
import Intro from './pages/Intro';
import ScrollToTop from './components/ScrollToTop';
import Veganism from './pages/Veganism';
import Ethics from './pages/Ethics';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/veganism" element={<Veganism />} />
          <Route path="/ethics" element={<Ethics />} />
          <Route path="/health" element={<Health />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/environment" element={<Environment />} />
          <Route path="/beginner-tips" element={<BeginnerTips />} />
          <Route path="/activism" element={<Activism />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;