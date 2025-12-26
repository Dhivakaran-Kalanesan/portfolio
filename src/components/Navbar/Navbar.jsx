import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg p-4 sticky-top bg-white">
      <div className="container">

        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          DK
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="mainNavbar">

          {/* Menu */}
          <ul className="navbar-nav mx-auto gap-lg-4">

            <li className="nav-item">
              <NavLink className="nav-link" to="/" >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/services" >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about" >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/projects" >
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/blogs" >
                Blogs
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/testimonials" >
                Testimonials
              </NavLink>
            </li>

          </ul>

          {/* CTA Button */}
          <div className="d-flex">
            <Link to="/contact" className="header-btn">
              Contact Me
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
