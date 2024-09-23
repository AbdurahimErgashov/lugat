import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Contact from '../pages/Contact/Contact';
import Dictionaries from '../pages/Dictionaries/Dictionaries';
import Home from '../pages/Home/Home';
import News from '../pages/News/News';
import Team from '../pages/Team/Team';
import Publications from '../pages/Publications/Publications';
import Statistics from '../pages/Statistics/Statistics';
import Footer from '../fotter/Fotter'; // Footer komponentini import qiling

function Root() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dictionaries" element={<Dictionaries />} />
        <Route path="/news" element={<News />} />
        <Route path="/team" element={<Team />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
      <Footer /> {/* Footer komponentini qo'shing */}
    </Router>
  );
}

export default Root;
