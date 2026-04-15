'use client';

import { motion } from 'framer-motion';
import { Project } from './data/projects';
import { Cpu, Wrench, Layers, Box } from 'lucide-react';
import Image from 'next/image';

const typeConfig = {
  industrial: { icon: Wrench,  color: 'text-amber-500',  bg: 'bg-amber-500/10' },
  software:   { icon: Cpu,     color: 'text-sky-400',    bg: 'bg-sky-400/10' },
  mejora:     { icon: Layers,  color: 'text-emerald-400',bg: 'bg-emerald-400/10' },
  prototipo:  { icon: Box,     color: 'text-violet-400', bg: 'bg-violet-400/10' },
};

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const cfg = typeConfig[project.type];
  const Icon = cfg.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: .65, ease: [.22,1,.36,1], delay: (index % 3) * .1 }}
      whileHover={{ y: -4 }}
      className={`relative border border-paper/10 bg-paper/[0.03] hover:bg-paper/[0.06] transition-all cursor-default group overflow-hidden ${
        project.highlight ? 'border-accent/30 shadow-lg shadow-accent/5' : ''
      }`}
    >
      {/* Highlight accent bar */}
      {project.highlight && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent z-20" />
      )}

      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden bg-paper/5 border-b border-paper/10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Sutil gradiente para integrar la imagen con el fondo de la tarjeta */}
        <div className="absolute inset-0 bg-gradient-to-t from-paper/[0.03] to-transparent opacity-60" />
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-2 rounded ${cfg.bg}`}>
            <Icon className={`w-4 h-4 ${cfg.color}`} />
          </div>
          <span className="text-faint text-xs font-mono">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg text-paper mb-1 leading-tight">{project.title}</h3>
        <p className="text-accent text-xs mb-3 tracking-wide uppercase font-medium">{project.subtitle}</p>

        {/* Description */}
        <p className="text-faint text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* KPIs */}
        {project.kpis && (
          <div className="flex gap-6 mb-6 border-y border-paper/5 py-3">
            {project.kpis.map((k) => (
              <div key={k.label}>
                <div className="font-serif text-xl text-paper/90">{k.value}</div>
                <div className="text-accent/60 text-[9px] uppercase tracking-widest font-bold">{k.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 border border-paper/15 text-faint/80 rounded-sm bg-paper/5">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}