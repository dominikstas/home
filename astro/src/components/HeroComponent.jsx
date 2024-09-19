import React, { useState, useEffect } from 'react';

const HeroComponent = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullName = 'Dominik Stasiak';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (displayedText.length < fullName.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullName.slice(0, displayedText.length + 1));
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [displayedText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1a1a1a',
      color: 'white',
      padding: '1rem',
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}>
          {displayedText}
          <span style={{
            opacity: showCursor ? 1 : 0,
            transition: 'opacity 0.1s',
          }}>|</span>
        </h1>
        <p style={{
          fontSize: '1.25rem',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem',
        }}>
          Software Engineer - combining physics with technology.
        </p>
        <button style={{
          backgroundColor: 'white',
          color: '#1a1a1a',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '9999px',
          cursor: 'pointer',
        }}>
          Let's talk
        </button>
      </div>
    </div>
  );
};

export default HeroComponent;