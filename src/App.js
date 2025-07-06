import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Board from './components/Board';
import Introduction from './components/Introduction';
import Achievements from './components/Achievements';
import AnnualPlan from './components/AnnualPlan';
import './App.css';
import Product from './components/Product';
import Educommittee from './components/Educommittee';
import Stories from './components/Stories';
// Dummy Components for other pages

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/board" element={<Board />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/annual-plan" element={<AnnualPlan />} />
        {/* <Route path="/contact" element={<Contact/>} /> */}
        <Route path="/product" element={<Product/>} />
        <Route path="/educommittee" element={<Educommittee/>} />
        <Route path="/stories" element={<Stories/>} />

      </Routes>
      <Footer />
    </Router>
  );
}
