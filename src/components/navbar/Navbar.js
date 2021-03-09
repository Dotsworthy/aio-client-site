import React, { useEffect, useState } from "react"
import NavbarLinks from "./NavbarLinks"
import { Link } from "gatsby"
import aioLogo from "../../images/aioLogoWhite.png"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const triggerNavbar = () => {
    if (navbarOpen === true) {
      setNavbarOpen(false)
      document.body.style.overflow = "auto"
    } else if (navbarOpen === false) {
      setNavbarOpen(true)
      document.body.style.overflow = "hidden"
    }
  }

  useEffect(() => {
    document.body.style.overflow = "auto"
  },[])

  return (
    <nav className="navigation" id="blue">
      <Link className="home-link" to="/">
        <img className="image-link" src={aioLogo} alt="aio-logo"></img>
        All In One
        
        
        </Link>
      <button className="navbox-toggle" id="toggle" onClick={() => triggerNavbar()}>
        {navbarOpen ? 
        <div className="burger-menu-container"id="burger-open">
          <div className="slice1" id="slice1"/>
          <div className="slice2" id="slice2"/>
          <div className="slice3" id="slice3"/>
        </div> 
        : 
        <div className="burger-menu-container" id="burger-closed">
          <div className="slice1"/>
          <div className="slice2"/>
          <div className="slice3"/>
        </div>
        }
      </button>
      {navbarOpen ? 
        <div className="navbox" id="navbox-open">
          <NavbarLinks setNavbarOpen={setNavbarOpen}/>
        </div>
       : 
        <div className="navbox" id="navbox-closed">
          <NavbarLinks setNavbarOpen={setNavbarOpen}/>
        </div>
      }
    </nav>
  )
}

export default Navbar