import { Fragment } from "react";
import Home from './Components/Home/Home.jsx';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx"

import Portfolio from "./Components/Portfolio/Portfolio.jsx";

import { Route, Routes } from "react-router-dom";


function App(){

  return <Fragment>
    <Navbar/>
    <Routes>
      <Route path= "/Home" element={<Home/>}></Route>
      <Route path= "/Hero" element={<Hero/>}></Route>
      <Route path= "/Portfolio" element={<Portfolio/>}></Route>
      <Route path= "/About" element={<About/>}></Route>
      <Route path= "/Contact" element={<Contact/>}></Route>
    </Routes>
    <Footer/>
  </Fragment>
}
export default App;