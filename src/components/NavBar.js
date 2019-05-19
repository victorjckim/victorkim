import React from "react";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        position: "fixed",
        zIndex: "1",
        minWidth: "100%"
      }}
    >
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sectionOne">
              Section 1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sectionTwo">
              Section 2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sectionThree">
              Section 3
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
