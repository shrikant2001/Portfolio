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
                <a class='nav-link' href='#skills'>
                  SKILLS
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#exp'>
                  EXPERIENCE
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#project'>
                  PROJECTS
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#contact'>
                  CONTACT
                </a>
              </li>
              
            </ul>
          </div>
        </nav>
  );
};

export default Navbar;
