import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Protfolio";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      {/* <Protfilio /> */}
      {/* <About /> */}
      {/* <Home /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/firstReact/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
