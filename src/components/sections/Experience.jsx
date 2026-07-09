import { motion } from 'framer-motion'
import { FiExternalLink, FiCheck } from 'react-icons/fi'
import { experiences } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import Button from '../ui/Button'

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Experience"
          title="Real-world development experience"
          subtitle="From freelance client delivery to full-stack product builds."
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="overflow-hidden">
                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-center">
                  <div>
                    <span className="inline-block rounded-full bg-violet-500/15 text-violet-300 px-3 py-1 text-xs font-semibold mb-4">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold">{exp.title}</h3>
                    <p className="text-muted mt-2">
                      {exp.company}
                      {exp.clientUrl && (
                        <>
                          {' '}
                          ·{' '}
                          <a
                            href={exp.clientUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:underline"
                          >
                            {exp.clientUrl.replace('https://', '')}
                          </a>
                        </>
                      )}
                    </p>
                    <p className="mt-3 font-medium text-violet-300">{exp.role}</p>

                    <div className="mt-6">
                      <h4 className="font-semibold mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                            <FiCheck className="text-emerald-400 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.achievements && (
                      <div className="mt-6">
                        <h4 className="font-semibold mb-3">Achievements</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((item) => (
                            <span
                              key={item}
                              className="rounded-full glass px-3 py-1.5 text-xs font-medium text-emerald-300"
                            >
                              ✔ {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {exp.liveUrl && (
                      <div className="mt-6">
                        <Button
                          href={exp.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outline"
                          icon={FiExternalLink}
                        >
                          {exp.featured ? 'Visit Website' : 'Live Demo'}
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-violet-600/20 to-cyan-500/10 blur-xl" />
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                      <img
                        src={exp.previewImage}
                        alt={`${exp.title} preview`}
                        className="w-full aspect-video object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
