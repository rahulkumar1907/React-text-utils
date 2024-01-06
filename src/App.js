import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm heading="Enter text to analyze below" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

