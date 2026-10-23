import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './CustomCursor.css'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const mouseEnter = () => setCursorVariant('hover')
    const mouseLeave = () => setCursorVariant('default')
    console.log('mouseEnter', mouseEnter)

    window.addEventListener('mousemove', mouseMove)

    // Add hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item, .stat-item')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', mouseEnter)
      el.addEventListener('mouseleave', mouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', mouseEnter)
        el.removeEventListener('mouseleave', mouseLeave)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5
    }
  }

  return (
    <>
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />
      <motion.div
        className="custom-cursor-follower"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      />
    </>
  )
}

export default CustomCursor

