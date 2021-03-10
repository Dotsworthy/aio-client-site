/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from "./navbar/Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { Link } from "gatsby"
import "./stylesheets/styles.scss"
import "./stylesheets/navbar.scss"
import "./stylesheets/frontend.scss"
import { StaticImage } from "gatsby-plugin-image"


const Layout = ({ children }) => {

  return (
    <>
      <header>
      <Navbar/>
      </header>
    
      <div className="site"
        style={{
          margin: `0 auto`,
          maxWidth: 1920,
        }}
      >
        <div className="site-content"><main>{children}</main></div>

        <footer className="footer">
          <Link className="logo" to="/">All in One Education</Link>

          <div className="icons">
            <a className="icon-link" href="https://www.facebook.com/allinoneeducationuk" name="facebook-link">
              <FontAwesomeIcon icon={faFacebook} size="1x" />
              <span className="hidden-name">Facebook</span>
            </a>

            <a className="icon-link" href="https://twitter.com/aioeducation?lang=en" name="twitter-link">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
              <span className="hidden-name">Twitter</span>
            </a>

            <a className="icon-link" href="https://www.instagram.com/allinoneeducationuk/" name="instagram-link">
              <FontAwesomeIcon icon={faInstagram} size="1x" />
              <span className="hidden-name">Instagram</span>
            </a>

          </div>

          <div className="logo-container">
            <StaticImage ClassName="logo" src="../images/OSCR.jpg" alt="OSCR"/>
            <StaticImage ClassName="logo" src="../images/SVCO.png" alt="SVCO"/>

          </div>

          <Link className="logo" to="/contact-us">Contact Us</Link>

        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
