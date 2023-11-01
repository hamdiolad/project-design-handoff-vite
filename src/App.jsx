import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/Footer";
import { Ptext } from "./components/Typography/Ptext";
import { H1_Headline } from "./components/Typography/H1_Headline";
import { H2_Headline } from "./components/Typography/H2_Headline";
import { Header } from "./components/Header";
import { ClientQuotes } from "./components/About/ClientQuotes";
import { HomePage } from "./pages/HomePage";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Header />
        <ClientQuotes />
        <Ptext />
        <H1_Headline h1_headline="Your headline text goes here" />
        <H2_Headline h2_headline="Your headline text goes here" />
        <Ptext text="Your text goes here" />

        <Footer />
      </div>
    </BrowserRouter>
  );
};

// <Route path="instructors" element={<Instructors />} />
//<Route path="sign in" element={<SignIn />} />
