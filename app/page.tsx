'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/components/data/projects';

// ── Stagger helpers ───────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 28 },
  show:    { opacity: 1, y: 0, transition: { duration: .65, ease: [.22,1,.36,1] } },
};

// ── Animated counter ──────────────────────────────────────────────
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const step = () => {
        start += Math.ceil(to / 40);
        if (start >= to) { setVal(to); return; }
        setVal(start);
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#111] text-paper">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-start justify-center min-h-screen px-8 md:px-20 pt-24 overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#f7f5f0 1px, transparent 1px), linear-gradient(90deg, #f7f5f0 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* Gradient blob */}
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #b5451b 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.08, 1], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-4xl"
        >
          <motion.p variants={itemVariants} className="section-tag mb-4">
            Portafolio Profesional
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6"
          >
            Ingeniería aplicada que <br />
            <span className="text-accent italic">transforma</span> procesos.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-faint text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            Jefe Sector Mantenimiento Mecánico Envasado en <strong className="text-paper/80">Bagley Argentina · Grupo Arcor</strong>.
            16 personas, maquinaria de alta velocidad, automatización y desarrollo.
            Siempre orientado hacia la <strong className="text-accent">ingeniería aplicada para resolver problemas </strong>.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
            <Link
              href="/proyectos"
              className="flex items-center gap-2 bg-accent text-paper px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
            >
              Ver proyectos <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cv"
              className="flex items-center gap-2 border border-paper/20 text-paper/70 px-7 py-3.5 text-sm font-medium tracking-wide hover:border-paper/50 hover:text-paper transition-colors"
            >
              Currículum <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/Federico Conci.pdf"
              download
              className="flex items-center gap-2 border border-accent/40 text-accent px-7 py-3.5 text-sm font-medium tracking-wide hover:border-accent hover:bg-accent/5 transition-colors"
            >
              Descargar CV <Download className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-faint text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span>scroll</span>
          <motion.div animate={{ y: [0,5,0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── KPI STRIP ────────────────────────────────────────────── */}
      <section className="border-t border-paper/10 border-b border-paper/10 py-10 px-8 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: 16,  suffix: '',  label: 'Personas lideradas' },
            { num: 3,   suffix: '',  label: 'Upgrades final de línea' },
            { num: 18,   suffix: '+', label: 'Años de experiencia' },
            { num: 100, suffix: '%', label: 'Ciclo de productos' },
          ].map((k) => (
            <div key={k.label} className="text-center">
              <div className="font-serif text-4xl text-accent mb-1">
                <Counter to={k.num} suffix={k.suffix} />
              </div>
              <div className="text-faint text-xs tracking-widest uppercase">{k.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-20">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="section-tag mb-3">Proyectos destacados</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Lo que construí<br /> con pasión genuina por la industria y la ingeniería.
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="hidden md:flex items-center gap-2 text-sm text-faint hover:text-paper transition-colors"
          >
            Ver todos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* ── ABOUT STRIP ──────────────────────────────────────────── */}
      <section className="border-t border-paper/10 py-24 px-8 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl">
          <div>
            <p className="section-tag mb-4">Sobre mí</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
              Técnico, gestor<br />y constructor de soluciones.
            </h2>
            <p className="text-faint leading-relaxed mb-4">
              Trabajo en el cruce entre la mecánica de precisión, la automatización y el desarrollo
              de software. Lidero el mantenimiento de líneas de envasado de alta velocidad mientras
              diseño piezas en 3D, escribo algoritmos para ser implementados en PLCs y aprendo Next.js en mi tiempo libre.
            </p>
            <p className="text-faint leading-relaxed">
              Mi objetivo: aportar esa visión integral al equipo de <strong className="text-paper/80">
              desarrollo de nuevos métodos y tecnologías de </strong> de Bagley, donde cada mejora impacta en millones
              de envases que llegan a las góndolas de Argentina.
            </p>
          </div>

          {/* Skills visual */}
          <div className="grid grid-cols-1 gap-6">
  {[
    { 
      label: 'Ingeniería de Mantenimiento & Fiabilidad', 
      level: 'Experto', 
      detail: 'Ciclo completo en maquinaria de alta velocidad y taller central.' 
    },
    { 
      label: 'Gestión de Proyectos & Equipos', 
      level: 'Senior', 
      detail: 'Liderazgo de 16+ personas y operaciones de upgrade (GTP).' 
    },
    { 
      label: 'Automatización & Control Industrial', 
      level: 'Avanzado', 
      detail: 'Algoritmos PLC/HMI y visión computarizada con OpenCV.' 
    },
    { 
      label: 'Prototipado Rápido & Manufactura Aditiva', 
      level: 'Avanzado', 
      detail: 'Validación de mejoras funcionales mediante impresión 3D FDM.' 
    },
    { 
      label: 'Ecosistemas Digitales (Next.js / Web)', 
      level: 'Enfoque Proyectos', 
      detail: 'Desarrollo de interfaces para gestión y visualización de datos técnicos.' 
    },
  ].map((s, i) => (
    <motion.div 
      key={s.label}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="group"
    >
      <div className="flex items-baseline justify-between mb-1">
        <h4 className="text-paper text-sm font-medium group-hover:text-accent transition-colors">
          {s.label}
        </h4>
        <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">
          {s.level}
        </span>
      </div>
      <p className="text-faint text-xs leading-relaxed border-l border-paper/10 pl-3 group-hover:border-accent/40 transition-colors">
        {s.detail}
      </p>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="border-t border-paper/10 py-8 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-serif text-xl text-accent">Federico S. Conci</span>
        <p className="text-faint text-xs text-center">
          Córdoba, Argentina
        </p>
        <div className="flex gap-6 text-xs text-faint">
          <Link href="/cv" className="hover:text-paper transition-colors">CV</Link>
          <Link href="/proyectos" className="hover:text-paper transition-colors">Proyectos</Link>
          <a href="mailto:concifederico@gmail.com" className="hover:text-paper transition-colors">Contacto</a>
        </div>
      </footer>
    </main>
  );
}
