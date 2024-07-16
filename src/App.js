import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import NewVideo from './Pages/NewVideo/NewVideo';
import "./App.css"

const App = () => {
  return (
    <Router>
      
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new-video" element={<NewVideo/>} />
        </Routes>
      
    </Router>
  );
};

export default App;

