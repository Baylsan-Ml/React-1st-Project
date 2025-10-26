import { Fragment } from "react";
import Navbar from "./Components/Navbar/navbar.jsx";
import Hero from "./Components/Hero/hero.jsx";
import Portfolio from "./Components/Portfolio/portfolio.jsx";
import About from "./Components/About/about.jsx";
import Contact from "./Components/Contact/contact.jsx";
import Footer from "./Components/Footer/footer.jsx"


function App(){

  return <Fragment>
    <Navbar/>
    <Hero/>
    <Portfolio/>
    <About/>
    <Contact/>
    <Footer/>
  </Fragment>
}
export default App;