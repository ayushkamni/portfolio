import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-gradient-to-r from-violet-600 via-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40',
  secondary:
    'glass text-white hover:bg-white/10 border border-white/10',
  ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
  outline:
    'border border-white/15 text-white hover:border-violet-400/50 hover:bg-violet-500/10',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  icon: Icon,
  download,
  target,
  rel,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`

  const motionProps = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.98 },
    className: classes,
  }

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        {...motionProps}
      >
        {Icon && <Icon className="text-lg" />}
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} {...motionProps}>
      {Icon && <Icon className="text-lg" />}
      {children}
    </motion.button>
  )
}
