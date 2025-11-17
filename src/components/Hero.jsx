import { motion } from 'framer-motion'

export default function Hero({ onShop }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-50 to-emerald-50" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-28 lg:py-32 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            Breathe better. Live better.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-lg text-gray-600 max-w-xl"
          >
            Explore advanced air purification, water systems, and wellness tech powered by proven innovation.
          </motion.p>
          <div className="mt-8 flex gap-4">
            <button onClick={onShop} className="px-5 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Shop products
            </button>
            <a href="#learn" className="px-5 py-3 rounded-md border border-blue-200 text-blue-700 font-semibold hover:bg-blue-50 transition">
              Learn more
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">Independent Distributor site concept for Vollara products.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            alt="Air purifier"
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1400&q=80&auto=format&fit=crop"
            className="w-full rounded-xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-md p-4 rounded-lg shadow">
            <p className="text-sm text-gray-700"><span className="font-semibold">ActivePure</span> style protection for air and surfaces</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
