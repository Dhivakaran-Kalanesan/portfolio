import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./utils/ScrollToTop";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Construction from "./pages/Construction/Construction";
import NotFound from "./pages/NotFound/NotFound";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Routes>

        {/* Pages WITH Navbar & Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Construction />} />
          <Route path="/blogs" element={<Construction />} />
          <Route path="/projects/restaurant-pos" element={<Construction />} />
          <Route path="/projects/online-ordering" element={<Construction />} />
          <Route path="/projects/retail-pos" element={<Construction />} />
          <Route path="/services/web-and-saas-development" element={<Construction />} />
          <Route path="/services/pos-and-payment-integrations" element={<Construction />} />
          <Route path="/services/api-and-third-party-integrations" element={<Construction />} />
        </Route>

        {/* Pages WITHOUT Navbar & Footer */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}
