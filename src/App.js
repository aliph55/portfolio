import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLink from "./components/SocialLinks";
import Exprience from "./components/Exprience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Exprience />
      <Contact />

      <SocialLink />
    </div>
  );
};

export default App;
