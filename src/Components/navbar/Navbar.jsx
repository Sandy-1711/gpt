import React from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import "./navbar.css";
import logo from '../../assets/logo.svg'
import { useState } from "react";
const Menu=()=>{
  return(
           <div >
              <p> <a href="#home">Home</a></p>
              <p> <a href="#wgpt3">What is GPT?</a></p>
              <p> <a href="#possibility">Open Ai</a></p>
              <p> <a href="#features">Case Study</a></p>
              <p> <a href="#blog">Library</a></p>
          </div>
);
};


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="gpt3__navbar-links_container">
          <p> <a href="#home">Home</a></p>
          <p> <a href="#wgpt3">What is GPT?</a></p>
          <p> <a href="#possibility">Open Ai</a></p>
          <p> <a href="#features">Case Study</a></p>
          <p> <a href="#blog">Library</a></p>
          </div>
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign In</p>
          <button type="button">Sign Up</button>
        </div>
        <div className="gpt3__navbar-menu">
          <>
            {toggleMenu ? (
              <IoCloseOutline color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            ) : (
              <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
            )}
            {toggleMenu && (
              <div className="gpt3__navbar-menu_container scale-up-centre">
              <div className="gpt3__navbar-menu_container-links">
                <Menu />
                </div>
                <div className="gpt3__navbar-menu_container-links-sign">
          <p>Sign In</p>
          <button type="button">Sign Up</button>
        </div>
                <div />
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default Navbar;


// export default Navbar;
