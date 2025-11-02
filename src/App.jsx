import { Fragment } from "react";
import Home from './Components/home/Home.jsx';
import Navbar from "./Components/navbar/Navbar.jsx";
import Hero from "./Components/hero/Hero.jsx";
import Portfolio from "./Components/Portfolio/portfolio.jsx";
import About from "./Components/about/About.jsx";
import Contact from "./Components/contact/Contact.jsx";
import Footer from "./Components/footer/Footer.jsx"
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