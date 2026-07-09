import { motion } from 'framer-motion'
import { achievements } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones & highlights"
          subtitle="Delivering results through consistent learning and execution."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <GlassCard className="h-full flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 font-bold">
                  ✔
                </span>
                <p className="font-medium leading-relaxed">{item}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
