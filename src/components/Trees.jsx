import { motion } from 'framer-motion';

const trees = [
  {
    name: 'Baobab',
    desc: 'The upside-down tree that stores water in its massive trunk to survive harsh dry seasons.',
    img: 'https://images.unsplash.com/photo-1521618755572-cdfb0b96a6d6?q=80&w=1600&auto=format&fit=crop',
    region: 'Madagascar & Africa',
  },
  {
    name: 'Ginkgo',
    desc: 'A living fossil with fan-shaped leaves, resilient through millions of years.',
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    region: 'East Asia',
  },
];

export default function Trees() {
  return (
    <section className="relative bg-gradient-to-b from-emerald-950 to-emerald-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-bold sm:text-5xl"
        >
          Trees that Tell Time
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-emerald-100"
        >
          Ancient, enduring, and essential—these trees anchor entire ecosystems.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {trees.map((t, idx) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-teal-400/90 px-3 py-1 text-xs font-semibold text-emerald-950">
                  {t.region}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="mt-2 text-sm text-emerald-100">{t.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
