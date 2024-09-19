'use client'
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      ...styles.nav,
      backgroundColor: isScrolled ? 'rgba(18, 18, 18, 0.8)' : 'transparent',
      boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
    }}>
      <div style={styles.container}>
        <a href="/" style={styles.logo}>DS</a>
        <div style={styles.menuIcon} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div style={{...styles.menuBar, transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'}}></div>
          <div style={{...styles.menuBar, opacity: isMenuOpen ? 0 : 1}}></div>
          <div style={{...styles.menuBar, transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'}}></div>
        </div>
        <ul style={{
          ...styles.navItems,
          ...styles.desktopMenu,
        }}>
          {['Work', 'About', 'Blog', 'Contact'].map((item) => (
            <li key={item} style={styles.navItem}>
              <a href={`#${item.toLowerCase()}`} style={styles.navLink}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
      {isMenuOpen && (
        <ul style={styles.mobileMenu}>
          {['Work', 'About', 'Blog', 'Contact'].map((item) => (
            <li key={item} style={styles.mobileNavItem}>
              <a 
                href={`#${item.toLowerCase()}`} 
                style={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#e0e0e0',
    textDecoration: 'none',
  },
  menuIcon: {
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '2rem',
    height: '2rem',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    zIndex: 10,
    '@media (max-width: 768px)': {
      display: 'flex',
    },
  },
  menuBar: {
    width: '2rem',
    height: '0.25rem',
    background: '#e0e0e0',
    borderRadius: '10px',
    transition: 'all 0.3s linear',
    transformOrigin: '1px',
  },
  navItems: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  desktopMenu: {
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  navItem: {
    margin: '0 1rem',
  },
  navLink: {
    color: '#e0e0e0',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
    ':hover': {
      color: '#ffffff',
    },
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(18, 18, 18, 0.95)',
    height: '100vh',
    textAlign: 'center',
    padding: '2rem',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    transition: 'transform 0.3s ease-in-out',
    listStyle: 'none',
  },
  mobileNavItem: {
    margin: '2rem 0',
  },
  mobileNavLink: {
    fontSize: '1.5rem',
    color: '#e0e0e0',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    ':hover': {
      color: '#ffffff',
    },
  },
};

export default Navbar;