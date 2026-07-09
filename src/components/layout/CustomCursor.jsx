import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    if (isTouchDevice) return

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const hide = () => setIsVisible(false)
    const show = () => setIsVisible(true)

    const checkPointer = (e) => {
      const target = e.target
      setIsPointer(
        target instanceof Element &&
          (target.closest('a, button, [role="button"], input, textarea, select') !== null)
      )
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', checkPointer)
    window.addEventListener('mouseleave', hide)
    window.addEventListener('mouseenter', show)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', checkPointer)
      window.removeEventListener('mouseleave', hide)
      window.removeEventListener('mouseenter', show)
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[70] hidden md:block"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 1.6 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.4 }}
      >
        <div className="h-8 w-8 rounded-full border border-violet-400/50 bg-violet-500/10 backdrop-blur-sm" />
      </motion.div>

      <motion.div
        className="pointer-events-none fixed z-[69] hidden md:block"
        animate={{
          x: position.x - 80,
          y: position.y - 80,
          opacity: isVisible ? 0.35 : 0,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.8 }}
      >
        <div className="h-40 w-40 rounded-full bg-gradient-to-r from-violet-600/30 to-cyan-400/20 blur-3xl" />
      </motion.div>
    </>
  )
}
