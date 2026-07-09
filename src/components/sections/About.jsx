import { motion } from 'framer-motion'
import { aboutContent, stats } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import AnimatedCounter from '../ui/AnimatedCounter'

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow="About Me"
          title="Crafting digital experiences with purpose"
          subtitle="A developer who blends engineering precision with design sensibility."
          align="left"
        />

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <GlassCard>
            <div className="space-y-5 text-base md:text-lg leading-relaxed text-slate-300">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">My interests include</h3>
              <div className="flex flex-wrap gap-3">
                {aboutContent.interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-full glass px-4 py-2 text-sm font-medium"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </GlassCard>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="text-center !p-6">
                  <p className="text-3xl md:text-4xl font-bold gradient-text">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-muted text-sm mt-2">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
