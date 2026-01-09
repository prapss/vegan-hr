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
import { Toaster } from 'sonner';
import Restaurants from './pages/Restaurants';
import BeginnerTips2 from './pages/BeginnerTips2';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/veganism" element={<Veganism />} />
          <Route path="/ethics" element={<Ethics />} />
          <Route path="/health" element={<Health />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/environment" element={<Environment />} />
          <Route path="/beginner-tips" element={<BeginnerTips />} />
          <Route path="/beginner-tips2" element={<BeginnerTips2 />} />
          <Route path="/activism" element={<Activism />} />
        </Routes>
        <Toaster />
        <Footer />
      </div>
    </Router>
  );
}

export default App;