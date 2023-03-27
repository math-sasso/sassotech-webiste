import { BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";


function AppRoutes() {
  return (


    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default AppRoutes;
