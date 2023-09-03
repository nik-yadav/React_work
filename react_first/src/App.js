import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./components/header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Brands from "./components/Brands";
import Services from "./components/Services";
import Footer from "./components/Footer";

import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/#about" element={<About />} />
        <Route path="/#brands" element={<Brands />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
