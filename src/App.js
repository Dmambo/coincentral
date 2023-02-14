import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoinLayout from './components/coinLayout/coinLayout';
import CoinDetails from './components/coinDetails/coinDetails';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CoinLayout />} />
          <Route path="/coin" element={<CoinDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
