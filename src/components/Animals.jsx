import { motion } from 'framer-motion';

const animals = [
  {
    name: 'Snow Leopard',
    desc: 'Master of the high mountains, built for silent leaps across jagged cliffs.',
    img: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1600&auto=format&fit=crop',
    habitat: 'Alpine',
  },
  {
    name: 'Scarlet Macaw',
    desc: 'A burst of color gliding over rainforest canopies, calling to its flock.',
    img: 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?q=80&w=1600&auto=format&fit=crop',
    habitat: 'Rainforest',
  },
  {
    name: 'African Elephant',
    desc: 'Gentle giant and ecosystem engineer, shaping savannas wherever it roams.',
    img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1600&auto=format&fit=crop',
    habitat: 'Savanna',
  },
];

export default function Animals() {
  return (
    <section className="relative bg-gradient-to-b from-emerald-900 to-emerald-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-bold sm:text-5xl"
        >
          Animals of the Wild
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-emerald-100"
        >
          From canopies to cliffs, each species plays a unique role in its ecosystem.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {animals.map((a, idx) => (
            <motion.article
              key={a.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={a.img}
                  alt={a.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-emerald-950">
                  {a.habitat}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{a.name}</h3>
                <p className="mt-2 text-sm text-emerald-100">{a.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
