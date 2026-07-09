import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiSearch } from 'react-icons/fi'
import { projects, projectCategories } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import Button from '../ui/Button'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory
      const query = searchQuery.toLowerCase()
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tech.some((t) => t.toLowerCase().includes(query))
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work & live deployments"
          subtitle="Production-ready applications built with modern stacks and deployed to the cloud."
        />

        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-10">
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/20'
                    : 'glass hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full glass pl-11 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-violet-500/40 bg-transparent"
            />
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="h-full flex flex-col overflow-hidden !p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[16/10] object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-muted mt-3 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-violet-300 mb-2">
                        Features
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {project.features.map((feature) => (
                          <li key={feature} className="text-sm text-slate-300">
                            ✔ {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3 mt-auto pt-4">
                      <Button
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        icon={FiExternalLink}
                        className="!px-4 !py-2.5 !text-xs"
                      >
                        Live Demo
                      </Button>
                      {project.githubUrl ? (
                        <Button
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outline"
                          icon={FiGithub}
                          className="!px-4 !py-2.5 !text-xs"
                        >
                          GitHub
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          className="!px-4 !py-2.5 !text-xs opacity-50 cursor-not-allowed"
                          onClick={(e) => e.preventDefault()}
                        >
                          GitHub Soon
                        </Button>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted py-12">
            No projects found matching your search.
          </p>
        )}
      </div>
    </section>
  )
}
