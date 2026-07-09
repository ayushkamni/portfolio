import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { personalInfo } from '../../data/portfolio'
import Button from '../ui/Button'
import TypingText from '../ui/TypingText'

const codeLines = [
  { text: 'const developer = {', indent: 0, color: 'text-violet-300' },
  { text: 'name: "Ayush Kamni",', indent: 1, color: 'text-cyan-300' },
  { text: 'role: "MERN Stack Developer",', indent: 1, color: 'text-cyan-300' },
  { text: 'skills: ["React", "Node", "MongoDB"],', indent: 1, color: 'text-emerald-300' },
  { text: 'passion: "Building scalable apps"', indent: 1, color: 'text-amber-300' },
  { text: '};', indent: 0, color: 'text-violet-300' },
]

function CodeIllustration() {
  const illustrationRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const element = illustrationRef.current
    if (!element) return

    const ctx = gsap.context(() => {
      gsap.to(element, {
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      })
    }, element)

    return () => ctx.revert()
  }, [])

  return (
    <motion.div
      ref={illustrationRef}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-xl mx-auto"
    >
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-violet-600/20 to-cyan-500/20 blur-2xl" />

      <div className="relative glass-strong rounded-3xl overflow-hidden gradient-border">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 text-xs text-muted">portfolio.jsx</span>
        </div>

        <div className="p-5 md:p-6 font-mono text-sm leading-7 min-h-[260px]">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.12 }}
              className={`${line.color}`}
              style={{ paddingLeft: `${line.indent * 1.5}rem` }}
            >
              {line.text}
            </motion.div>
          ))}

          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-violet-400 ml-1 align-middle"
          />
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-6 -right-4 glass rounded-2xl px-4 py-3 text-xs font-medium"
      >
        <span className="text-emerald-400">●</span> Available for hire
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="section-padding pt-32 md:pt-40 min-h-screen flex items-center">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              B.Tech Graduate · Open to Software Developer Roles
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted text-sm md:text-base mb-3"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-lg md:text-xl font-medium text-slate-300"
            >
              {personalInfo.title}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-3 text-base md:text-lg"
            >
              <TypingText
                texts={[
                  'Building scalable web apps',
                  'Crafting premium UI experiences',
                  'Deploying production-ready solutions',
                ]}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-muted text-base md:text-lg leading-relaxed max-w-xl"
            >
              {personalInfo.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                href={personalInfo.resumeUrl}
                download
                icon={FiDownload}
              >
                Download Resume
              </Button>
              <Button href="#contact" variant="outline" icon={FiArrowRight}>
                Hire Me
              </Button>
              <Button href="#projects" variant="secondary">
                View Projects
              </Button>
            </motion.div>
          </div>

          <CodeIllustration />
        </div>
      </div>
    </section>
  )
}
