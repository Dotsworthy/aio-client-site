import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const NavbarLinks = () => {

  return (
    <>

          <Link className="navbar-link" to="/about-us">About Us</Link>
          {/* <Link className="navbar-link" to="/news">News</Link> */}
          <Link className="navbar-link" to="/take-action">Take Action</Link>
          {/* <Link className="navbar-link" to="/resources/">Resources</Link> */}
          <Link className="navbar-link" to="/contact-us">Contact Us</Link>
          {/* <Link className="navbar-link" id="admin-login" to="/admin/">Admin Login</Link> */}

      <div className="icons-navlinks">
        <a className="icon-link" href="https://www.facebook.com/allinoneeducationuk" name="facebook-link">
          <FontAwesomeIcon icon={faFacebook} />
          <span className="hidden-name">Facebook</span>
        </a>
            
        <a className="icon-link" href="https://twitter.com/aioeducation?lang=en" name="twitter-link">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="hidden-name">Twitter</span>
        </a>

        <a className="icon-link"  href="https://www.instagram.com/allinoneeducationuk/" name="instagram-link">
          <FontAwesomeIcon icon={faInstagram} />
          <span className="hidden-name">Instagram</span>
        </a>
      </div>
    </>
  )
}
  
  export default NavbarLinks