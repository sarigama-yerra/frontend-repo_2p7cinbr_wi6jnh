import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ onCTA }) {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-[#0A2F30]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A2F30]/40 via-[#0A2F30]/60 to-[#0A2F30]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl text-white">
          <motion.h1
            className="font-serif text-4xl leading-tight sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sapori d'Autore nel cuore di Sassari
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-white/90 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Cucina contemporanea, ingredienti locali e un'atmosfera elegante. Scopri la nostra selezione di piatti signature e vini sardi.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <button
              onClick={() => onCTA('menu')}
              className="pointer-events-auto rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0A2F30] shadow-lg transition hover:bg-[#E2BE4C]"
            >
              Scopri il Menù
            </button>
            <button
              onClick={() => onCTA('contact')}
              className="pointer-events-auto rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Prenota un Tavolo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
