import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { personalInfo } from '../../data/portfolio'

const socialLinks = [
  { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="section-padding pt-12 pb-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold">
                Designed & Developed by{' '}
                <span className="gradient-text">{personalInfo.name}</span>
              </p>
              <p className="text-muted text-sm mt-2">
                © 2026 All Rights Reserved
              </p>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full glass hover:bg-white/10 transition-colors"
                  aria-label={label}
                >
                  <Icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
