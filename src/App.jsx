import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Ptext } from "./components/Typographic/Ptext";
import { Header } from "./components/Header";
import { ClientQuotes } from "./components/ClientQuotes";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/navbar/Navbar";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Header />
        <ClientQuotes />
        <Ptext />
        <Ptext text="Your text goes here" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

// <Route path="instructors" element={<Instructors />} />
//<Route path="sign in" element={<SignIn />} />
