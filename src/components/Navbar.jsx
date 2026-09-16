
import { useState } from "react";
import clinicData from "../data/clinicData";

function Navbar({ isDarkMode, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar clinic-navbar sticky-top">
      <div className="container">

        {/* Logo */}
        <a
          className="navbar-brand fw-bold text-primary"
          href="#home"
          onClick={closeMenu}
        >
          <i className="bi bi-heart-pulse-fill me-2"></i>
          AIM CLINIC
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="navbar-toggler"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className={`navbar-menu ${
            menuOpen ? "navbar-menu-open" : ""
          }`}
        >
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeMenu}>
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#doctors" onClick={closeMenu}>
                Doctors
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#appointment"
                onClick={closeMenu}
              >
                Appointment
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>

          </ul>

          {/* Buttons */}
          <div className="navbar-actions">

            {/* Theme */}
            <button
              type="button"
              className="btn theme-toggle"
              onClick={onThemeToggle}
              title={
                isDarkMode
                  ? "Switch to day mode"
                  : "Switch to night mode"
              }
            >
              <i
                className={`bi ${
                  isDarkMode
                    ? "bi-sun-fill"
                    : "bi-moon-stars-fill"
                }`}
              ></i>
            </button>

            {/* Call */}
            <a
              href={`tel:${clinicData.phone}`}
              className="btn btn-primary"
              onClick={closeMenu}
            >
              <i className="bi bi-telephone-fill me-2"></i>
              Call Now
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
