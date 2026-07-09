import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`glass rounded-2xl p-6 md:p-8 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
