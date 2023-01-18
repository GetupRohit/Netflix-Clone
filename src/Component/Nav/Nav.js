import React, { useEffect, useState } from "react";
import "./Nav.css";

const Navbar = () => {
  const [darkNav, showDarkNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? showDarkNav(true) : showDarkNav(false);
    });
  }, []);

  return (
    <nav className={`navbar ${darkNav && "navbarDark"}`}>
      <img
        className="navbar__netflix-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflx_logo"
      />
      <img
        className="navbar__netflix-avatar"
        src="https://www.bing.com/th?id=AMMS_177888a989b34986ccbe4bd43577e603&w=102&h=102&c=7&o=6&oif=webp&pid=SANGAM"
        alt="netflix_avatar"
      />
    </nav>
  );
};

export default Navbar;
