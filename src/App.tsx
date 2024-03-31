import React from "react";
import "./App.css";
import Home from "./onepirate/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./onepirate/Contact";
import { ParallaxProvider } from 'react-scroll-parallax';
import Articles from "./onepirate/Articles";
import NotFound404 from "./onepirate/404";
import Floating from "./onepirate/modules/components/Floating";

function App() {

  return (
    <React.Fragment>
      <ParallaxProvider>
        <BrowserRouter>
        <Floating>
          <Routes>
            <Route path="/contato" element={<Contact />} />
            <Route path="/blog/*" element={<Articles />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
          </Floating>
        </BrowserRouter>
      </ParallaxProvider>
    </React.Fragment>
  );
}

export default App;
