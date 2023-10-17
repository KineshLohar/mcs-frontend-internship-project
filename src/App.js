import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import bgImg from './assets/gradientbg.png';
import Footer from "./components/Footer";
import Details from "./components/Details";

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {
  return (
    <BrowserRouter>
    <Wrapper>
      <div style={{backgroundImage: `url(${bgImg})`, margin: 0, backgroundSize:"100vw"}} className="overflow-hidden">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/details/:id' element={<Details />}    />
          </Routes>
          <Footer />
      </div>
    </Wrapper>
    </BrowserRouter>
  );
}

export default App;
