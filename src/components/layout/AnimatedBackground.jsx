import { motion } from 'framer-motion'
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
} from 'react-icons/si'

const floatingIcons = [
  { Icon: SiReact, color: '#61DAFB', top: '12%', left: '8%', delay: 0 },
  { Icon: SiNodedotjs, color: '#68A063', top: '22%', right: '10%', delay: 0.5 },
  { Icon: SiMongodb, color: '#47A248', top: '58%', left: '6%', delay: 1 },
  { Icon: SiJavascript, color: '#F7DF1E', top: '70%', right: '8%', delay: 1.5 },
  { Icon: SiTailwindcss, color: '#38BDF8', top: '40%', right: '18%', delay: 0.8 },
  { Icon: SiFirebase, color: '#FFCA28', top: '78%', left: '20%', delay: 1.2 },
]

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute top-[20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[30%] h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {floatingIcons.map(({ Icon, color, top, left, right, delay }, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:flex h-12 w-12 items-center justify-center rounded-xl glass"
          style={{ top, left, right }}
          animate={{ y: [0, -16, 0], rotate: [0, 5, -5, 0] }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            delay,
            ease: 'easeInOut',
          }}
        >
          <Icon style={{ color }} className="text-2xl" />
        </motion.div>
      ))}
    </div>
  )
}
