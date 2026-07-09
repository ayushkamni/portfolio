import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { testimonials } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say"
          subtitle="Designed for future client reviews — showcasing trust, professionalism, and delivery quality."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FiStar key={i} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 leading-relaxed flex-1">
                  &ldquo;{item.content}&rdquo;
                </p>

                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-muted">
                    {item.role} · {item.company}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
