import { motion } from 'framer-motion'
import {
  FiCode,
  FiLayout,
  FiServer,
  FiCloud,
  FiSmartphone,
  FiTool,
  FiRefreshCw,
  FiTrendingUp,
} from 'react-icons/fi'
import { services } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

const serviceIcons = [
  FiCode,
  FiLayout,
  FiServer,
  FiCloud,
  FiSmartphone,
  FiTool,
  FiRefreshCw,
  FiTrendingUp,
]

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Services"
          title="What I can build for you"
          subtitle="End-to-end development services tailored for startups, businesses, and product teams."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length]
            return (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <GlassCard className="h-full text-center group">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 group-hover:from-violet-600/30 group-hover:to-cyan-500/30 transition-colors">
                    <Icon className="text-2xl text-violet-300" />
                  </div>
                  <h3 className="font-semibold">{service}</h3>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
