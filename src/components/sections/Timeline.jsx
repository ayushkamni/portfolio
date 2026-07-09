import { motion } from 'framer-motion'
import { timeline } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'

export default function Timeline() {
  return (
    <section id="timeline" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Journey"
          title="My development timeline"
          subtitle="From fundamentals to full-stack delivery and client-ready products."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-cyan-400/30 to-transparent md:-translate-x-1/2" />

          {timeline.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.08 }}
              className={`relative flex items-center gap-6 mb-10 md:mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                <span className="inline-block rounded-full glass px-3 py-1 text-xs font-bold text-violet-300 mb-2">
                  {item.year}
                </span>
                <p className="text-base md:text-lg font-medium">{item.title}</p>
              </div>

              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 shadow-lg shadow-violet-500/30 z-10">
                <span className="h-2 w-2 rounded-full bg-white" />
              </div>

              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
