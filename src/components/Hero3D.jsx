import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], ['0px', '8px']);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6o5wB1Jtco9y3m7r/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradients to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-950/60 via-transparent to-emerald-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-emerald-950/80 to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          style={{ y: titleY, opacity: titleOpacity, filter: blur.to(b => `blur(${b})`) }}
          className="font-display text-5xl font-bold leading-tight sm:text-6xl md:text-7xl"
        >
          Explore the Wild in 3D
        </motion.h1>
        <motion.p
          style={{ y: titleY, opacity: titleOpacity }}
          className="mt-6 max-w-2xl text-base/7 text-emerald-100 sm:text-lg/8"
        >
          Scroll to wander through living habitats. Meet animals and trees, each with stories rooted in nature.
        </motion.p>
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 backdrop-blur-md ring-1 ring-white/20"
        >
          <span className="text-sm text-emerald-50">Scroll Down</span>
          <span className="h-1 w-24 rounded-full bg-gradient-to-r from-emerald-300 to-teal-300" />
        </motion.div>
      </div>
    </section>
  );
}
