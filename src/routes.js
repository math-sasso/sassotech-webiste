import { BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Services from "./Pages/Services";


function AppRoutes() {
  return (


    <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Routes>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
      </Routes>
    <Footer/>
    </BrowserRouter>

  )
}

export default AppRoutes;
