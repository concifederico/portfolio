'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { useLocale, useMessages, useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { Link } from '@/i18n/routing';
import {
  getFeaturedProjects,
  LocalizedProjectData,
  mergeProjectTranslations,
} from '@/components/data/projects';

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

type HomeMessages = {
  hero?: {
    tag?: string;
    title?: string;
    description?: string;
    viewProjects?: string;
    viewCV?: string;
    downloadCV?: string;
    scroll?: string;
  };
  projects?: {
    tag?: string;
    title?: string;
    viewAll?: string;
  };
  about?: {
    tag?: string;
    title?: string;
    description1?: string;
    description2?: string;
  };
  projectsData?: Record<string, LocalizedProjectData>;
};

export default function HomePage() {
  const locale = useLocale();
  const tKpi = useTranslations('kpi');
  const tSkills = useTranslations('skills');
  const tFooter = useTranslations('footer');
  const messages = useMessages() as HomeMessages;
  const hero = messages.hero ?? {};
  const projects = messages.projects ?? {};
  const about = messages.about ?? {};
  const cvFile = locale === 'en' ? '/Federico_Conci_en.pdf' : '/Federico_Conci.pdf';
  const localizedProjects = useMemo(
    () => mergeProjectTranslations(messages.projectsData),
    [messages]
  );
  const featuredProjects = useMemo(
    () => getFeaturedProjects(localizedProjects),
    [localizedProjects]
  );

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
            {hero.tag ?? ''}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6"
            dangerouslySetInnerHTML={{ __html: hero.title ?? '' }}
          />

          <motion.p
            variants={itemVariants}
            className="text-faint text-lg md:text-xl max-w-xl leading-relaxed mb-10"
            dangerouslySetInnerHTML={{ __html: hero.description ?? '' }}
          />

          <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
            <Link
              href="/proyectos"
              className="flex items-center gap-2 bg-accent text-paper px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
            >
              {hero.viewProjects ?? ''} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cv"
              className="flex items-center gap-2 border border-paper/20 text-paper/70 px-7 py-3.5 text-sm font-medium tracking-wide hover:border-paper/50 hover:text-paper transition-colors"
            >
              {hero.viewCV ?? ''} <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={cvFile}
              download
              className="flex items-center gap-2 border border-accent/40 text-accent px-7 py-3.5 text-sm font-medium tracking-wide hover:border-accent hover:bg-accent/5 transition-colors"
            >
              {hero.downloadCV ?? ''} <Download className="w-4 h-4" />
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
          <span>{hero.scroll ?? ''}</span>
          <motion.div animate={{ y: [0,5,0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── KPI STRIP ────────────────────────────────────────────── */}
      <section className="border-t border-b border-paper/10 py-10 px-8 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: 16,  suffix: '',  label: tKpi('people') },
            { num: 3,   suffix: '',  label: tKpi('upgrades') },
            { num: 18,   suffix: '+', label: tKpi('experience') },
            { num: 16,  suffix: '+', label: tKpi('projects') },
            { num: 30,  suffix: '+', label: tKpi('mounted') },
            { num: 2,   suffix: '',  label: tKpi('conicet') },
            { num: 3,   suffix: '',  label: tKpi('cncBuilt') },
            { num: 12,  suffix: '+', label: tKpi('awards') },
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
            <p className="section-tag mb-3">{projects.tag ?? ''}</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight" dangerouslySetInnerHTML={{ __html: projects.title ?? '' }} />
          </div>
          <Link
            href="/proyectos"
            className="hidden md:flex items-center gap-2 text-sm text-faint hover:text-paper transition-colors"
          >
            {projects.viewAll ?? ''} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* ── ABOUT STRIP ──────────────────────────────────────────── */}
      <section className="border-t border-paper/10 py-24 px-8 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl">
          <div>
            <p className="section-tag mb-4">{about.tag ?? ''}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: about.title ?? '' }} />
            <p className="text-faint leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: about.description1 ?? '' }} />
            <p className="text-faint leading-relaxed" dangerouslySetInnerHTML={{ __html: about.description2 ?? '' }} />
          </div>

          {/* Skills visual */}
          <div className="grid grid-cols-1 gap-6">
  {[
    { 
      label: tSkills('maintenance'), 
      level: tSkills('maintenanceLevel'), 
      detail: tSkills('maintenanceDetail') 
    },
    { 
      label: tSkills('projects'), 
      level: tSkills('projectsLevel'), 
      detail: tSkills('projectsDetail') 
    },
    { 
      label: tSkills('automation'), 
      level: tSkills('automationLevel'), 
      detail: tSkills('automationDetail') 
    },
    { 
      label: tSkills('prototyping'), 
      level: tSkills('prototypingLevel'), 
      detail: tSkills('prototypingDetail') 
    },
    { 
      label: tSkills('web'), 
      level: tSkills('webLevel'), 
      detail: tSkills('webDetail') 
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
          {tFooter('location')}
        </p>
        <div className="flex gap-6 text-xs text-faint">
          <Link href="/cv" className="hover:text-paper transition-colors">{tFooter('cv')}</Link>
          <Link href="/proyectos" className="hover:text-paper transition-colors">{tFooter('projects')}</Link>
          <a href="mailto:concifederico@gmail.com" className="hover:text-paper transition-colors">{tFooter('contact')}</a>
        </div>
      </footer>
    </main>
  );
}
