import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { education } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import AnimatedCounter from '../ui/AnimatedCounter'

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          subtitle="Completed B.Tech in Computer Science with strong fundamentals and hands-on project experience."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <GlassCard className="text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 shadow-xl shadow-violet-500/25">
                <FiAward className="text-2xl text-white" />
              </div>

              <span className="inline-block rounded-full bg-emerald-500/15 text-emerald-400 px-4 py-1.5 text-xs font-semibold mb-4">
                {education.status}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold">{education.institution}</h3>
              <p className="text-lg text-violet-300 mt-2">{education.degree}</p>
              <p className="text-muted mt-1">{education.field}</p>
              <p className="text-sm text-muted mt-3">{education.period}</p>

              <div className="mt-8 inline-flex flex-col items-center rounded-2xl glass px-8 py-5">
                <span className="text-sm uppercase tracking-widest text-muted">CGPA</span>
                <span className="text-4xl md:text-5xl font-bold gradient-text mt-1">
                  <AnimatedCounter value={education.cgpa} />
                </span>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
