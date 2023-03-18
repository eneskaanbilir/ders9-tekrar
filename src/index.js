import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import Header from "./Header.jsx"
import Section from "./Section.jsx";
import Footer from "./Footer.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <main>
    <Header/>
    <Section />
    <Footer />

  </main>

);