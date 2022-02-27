import React from "react";
import "../Styles/Navbar.scss";

const Navbar = () => {
  return (
        <nav class='navbar navbar-expand-lg navbar-light navbar-container '>
          
          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse navbar-butn-container' id='navbarNav'>
            <ul class='navbar-nav'>
              
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  SKILLS
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  EXPERIENCE
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  PROJECTS
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  EDUCATION
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  CONTACT
                </a>
              </li>
              
            </ul>
          </div>
        </nav>
  );
};

export default Navbar;
