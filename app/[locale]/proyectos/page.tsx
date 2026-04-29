'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useMessages, useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import {
  LocalizedProjectData,
  mergeProjectTranslations,
} from '@/components/data/projects';

type ProjectsPageMessages = {
  proyectos?: {
    tag?: string;
    title?: string;
    description?: string;
    filters?: Record<string, string>;
  };
  projectsData?: Record<string, LocalizedProjectData>;
};

export default function ProyectosPage() {
  const t = useTranslations('proyectos');
  const messages = useMessages() as ProjectsPageMessages;
  const proyectos = messages.proyectos ?? {};
  const [active, setActive] = useState('all');
  const projectsWithData = useMemo(
    () => mergeProjectTranslations(messages.projectsData),
    [messages]
  );

  // Obtener los filtros del JSON
  const filterKeys = ['all', 'industrial', 'software', 'mejora', 'prototipo'];
  const filters = filterKeys.map(key => ({
    key,
    label: proyectos.filters?.[key] ?? t(`filters.${key}`)
  }));

  const filtered = active === 'all' ? projectsWithData : projectsWithData.filter((p) => p.type === active);

  return (
    <main className="min-h-screen bg-[#111] text-paper">
      <Navbar />
      {/* Header */}
      <section className="pt-36 pb-16 px-8 md:px-20 border-b border-paper/10">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="section-tag mb-4">
          {proyectos.tag ?? ''}
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }} 
          className="font-serif text-5xl md:text-6xl leading-tight mb-4"
          dangerouslySetInnerHTML={{ __html: proyectos.title ?? '' }}
        />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="text-faint text-lg max-w-xl">
          {proyectos.description ?? ''}
        </motion.p>
      </section>

      {/* Filter bar */}
      <div className="px-8 md:px-20 py-6 flex gap-3 flex-wrap border-b border-paper/10">
        {filters.map((f) => (
          <button 
            key={f.key} 
            onClick={() => setActive(f.key)} 
            className={`text-xs px-4 py-2 border tracking-wider uppercase transition-colors ${active === f.key ? 'bg-accent border-accent text-paper' : 'border-paper/15 text-faint hover:border-paper/40 hover:text-paper'}`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section className="px-8 md:px-20 py-16">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.filter(p => p).map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </motion.div>
      </section>
    </main>
  );
}
