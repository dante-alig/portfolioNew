import React, { useState } from "react";
import { motion } from "framer-motion";
import profil from "../images/profil.jpg";
import Drawer from "./drawer";
import { Link } from "react-router-dom";

const Nav = ({ parallaxRef }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const scrollToSection = (offset) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(offset);
    }
  };

  const NavLink = ({ children, onClick, href }) => {
    return (
      <motion.div
        style={{ 
          position: "relative",
          cursor: "pointer",
          padding: "2px 0"
        }}
        whileHover="hover"
      >
        {href ? (
          <Link
            to={href}
            target="_blank"
            style={{ 
              textDecoration: "none", 
              color: "inherit",
              position: "relative",
              zIndex: 1
            }}
          >
            {children}
          </Link>
        ) : (
          <div
            onClick={onClick}
            style={{ 
              position: "relative",
              zIndex: 1
            }}
          >
            {children}
          </div>
        )}
        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "#000",
            originX: 0
          }}
          initial={{ scaleX: 0 }}
          variants={{
            hover: {
              scaleX: 1,
              transition: {
                duration: 0.3,
                ease: "easeInOut"
              }
            }
          }}
        />
      </motion.div>
    );
  };

  return (
    <div className="nav-container">
      {/* ----- photo de profil--------- */}
      <div className="profil-pic">
        <div>
          <img src={profil} />
        </div>
        <div className="profil-name">Dante</div>
      </div>

      {/* ----- Navigation--------- */}
      <nav>
        <NavLink onClick={() => scrollToSection(0)}>
          Work
        </NavLink>
        <NavLink onClick={() => setIsDrawerOpen(true)}>
          About
        </NavLink>
        <NavLink href="https://calendly.com/samuelceleste/appel">
          Contact
        </NavLink>
      </nav>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

export default Nav;
