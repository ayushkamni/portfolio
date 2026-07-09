import { motion } from 'framer-motion'
import { skillCategories } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import ProgressBar from '../ui/ProgressBar'

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Skills"
          title="Technical expertise across the stack"
          subtitle="Proficient in modern web technologies with a focus on performance, scalability, and clean architecture."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: categoryIndex * 0.08 }}
            >
              <GlassCard className="h-full">
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <ProgressBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={skillIndex * 0.05}
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
