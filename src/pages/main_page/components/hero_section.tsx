import { useState, useEffect } from 'react'
import cat1 from '/src/assets/cursor-cats/cat_flying-removebg-preview.png'
import cat2 from '/src/assets/cursor-cats/обои_на_айфон-removebg-preview.png'
import cat3 from '/src/assets/cursor-cats/Laptop_wallpaper-removebg-preview.png'
import { useCursorTrail } from '../../../animations/useCursorTrail'

const trailImages = [cat1, cat2, cat3]

function HeroSection() {
  const { positions, visible, moving, enter, move, hide } = useCursorTrail()
  const [typed, setTyped] = useState('')

  useEffect(() => {
    const full = 'PORTFOLIO'
    if (typed.length < full.length) {
      const timeout = setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 120)
      return () => clearTimeout(timeout)
    }
  }, [typed])

  return (
    <section
      className="hero-section"
      onMouseEnter={enter}
      onMouseMove={move}
      onMouseLeave={hide}
    >
      <p id="welcome-text">
        WELCOME TO <span>MY</span>
      </p>
      <p id="portfolio-text">{typed}<span className="cursor-blink">|</span></p>
      {positions.map((p, i) => (
        <img
          key={i}
          src={trailImages[i]}
          alt=""
          style={{
            position: 'fixed',
            left: p.x,
            top: p.y,
            width: 48,
            height: 48,
            pointerEvents: 'none',
            zIndex: 9999,
            transform: 'translate(-50%, -50%)',
            opacity: visible && moving ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
      ))}
    </section>
  )
}

export default HeroSection
