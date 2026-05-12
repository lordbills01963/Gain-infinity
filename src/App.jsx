import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans overflow-hidden">

      <section className="relative min-h-screen flex items-center px-6 lg:px-20 py-20 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.35),transparent_35%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(126,34,206,0.25),transparent_30%)]"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 mb-8 uppercase text-sm">
              <Sparkles className="w-4 h-4" />
              Luxury Digital Marketing Agency
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
              Elevate Your
              <span className="block text-purple-500">Brand Presence</span>
            </h1>

            <p className="text-gray-300 mb-10">
              Gain Infinity helps businesses grow visibility, engagement and revenue.
            </p>

            <a
              href="https://wa.me/2347047350000"
              className="inline-flex items-center gap-2 bg-purple-600 px-6 py-3 rounded-xl"
            >
              Start Growing <ArrowRight />
            </a>
          </motion.div>

        </div>
      </section>

      <Analytics />
    </div>
  );
}
