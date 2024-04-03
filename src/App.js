import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "./App.css";

import Header from './includes/components/header';

import Home from './includes/pages/Home';
import About from './includes/pages/About';
import PasteTOS from './includes/pages/PasteTOS';
import Request from './includes/pages/Request';
import NoPage from './includes/pages/NoPage';

import data from

// import Schema01 from "./includes/Schema01";
// import Schema02 from "./includes/Schema02";
// import Schema03 from "./includes/Schema03";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/paste-tos" element={<PasteTOS />} />
          <Route path="/request" element={<Request />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      
      {/* <h1>Data from Firebase Firestore</h1>
      <h2>Collection: sortedTerms</h2>
      <hr/>

      <h3>Schema 01</h3>
      <Schema01 />
      <hr/>

      <h3>Schema 02</h3>
      <Schema02 />
      <hr/>

      <h3>Schema 03</h3>
      <Schema03 />
      <hr/> */}

      </div>
    </BrowserRouter>
  );
}

export default App;
