import { motion } from 'framer-motion'
import { ArrowRight, Zap, Users, BarChart3, CheckCircle, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Manage projects with blazing-fast performance'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Collaboration',
      description: 'Work seamlessly with your team members'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Advanced Analytics',
      description: 'Track progress with detailed insights'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Task Management',
      description: 'Organize tasks with Kanban boards'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Sparkles className="w-8 h-8 text-primary-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">
            TaskFlow AI
          </span>
        </motion.div>
        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-6 py-2 rounded-lg text-dark-900 bg-white hover:bg-gray-100 font-semibold transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-6 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 font-semibold transition"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Manage Projects Like a{' '}
          <span className="bg-gradient-to-r from-primary-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Pro
          </span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          TaskFlow AI is the ultimate project management platform designed for modern teams. Collaborate, track, and deliver with confidence.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center"
        >
          <Link
            to="/signup"
            className="px-8 py-4 bg-primary-500 hover:bg-primary-600 rounded-lg font-semibold flex items-center gap-2 transition transform hover:scale-105"
          >
            Start Free <ArrowRight className="w-5 h-5" />
          </Link>
          <button className="px-8 py-4 border border-gray-600 rounded-lg font-semibold hover:border-gray-400 transition">
            Watch Demo
          </button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold text-center mb-16">Powerful Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary-500/50 transition group"
            >
              <div className="text-primary-400 mb-4 group-hover:scale-110 transition">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center"
      >
        <div className="p-12 rounded-2xl bg-gradient-to-r from-primary-500/20 to-blue-500/20 border border-primary-500/30 backdrop-blur-md">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
          <p className="text-gray-300 mb-8">Join thousands of teams already using TaskFlow AI</p>
          <Link
            to="/signup"
            className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Get Started Free
          </Link>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-20 py-8 text-center text-gray-400">
        <p>&copy; 2024 TaskFlow AI. All rights reserved.</p>
      </footer>
    </div>
  )
}
