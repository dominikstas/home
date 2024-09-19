'use client'
import React, { useState, useEffect } from 'react'

export default function HeroComponent() {
  const [displayedText, setDisplayedText] = useState('')
  const fullName = 'Dominik Stasiak'
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (displayedText.length < fullName.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullName.slice(0, displayedText.length + 1))
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [displayedText])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>
          {displayedText}
          <span
            style={{
              ...styles.cursor,
              opacity: showCursor ? 1 : 0,
              transition: 'opacity 0.1s',
            }}
          >
            |
          </span>
        </h1>
        <p style={styles.description}>
          Software Engineer - combining physics with technology to create innovative solutions.
        </p>
        <div>
          <button style={styles.button}>
            Let's talk
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(45deg, #1a1a1a, #2c2c2c, #3d3d3d)',
    backgroundSize: '400% 400%',
    animation: 'gradientBG 15s ease infinite',
    color: '#e0e0e0',
    padding: '1rem',
    fontFamily: "'Poppins', sans-serif",
  },
  content: {
    textAlign: 'center',
    maxWidth: '800px',
  },
  heading: {
    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
    fontWeight: 'bold',
    marginBottom: '1rem',
    position: 'relative',
  },
  cursor: {
    position: 'absolute',
  },
  description: {
    fontSize: 'clamp(1rem, 3vw, 1.5rem)',
    marginBottom: '2rem',
    lineHeight: 1.6,
  },
  button: {
    backgroundColor: 'rgba(224, 224, 224, 0.1)',
    color: '#e0e0e0',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: '2px solid #e0e0e0',
    borderRadius: '9999px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    outline: 'none',
  },
}


