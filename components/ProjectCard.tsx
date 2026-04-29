'use client';

import { useEffect, useState } from 'react';
import { track } from '@vercel/analytics';
import { motion } from 'framer-motion';
import { Project } from './data/projects';
import { Cpu, Wrench, Layers, Box, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('projectCard');

  if (!project) return null;
  
  const cfg = typeConfig[project.type];
  const Icon = cfg.icon;

  // Normalizar imágenes (array)
  const imageList = project.images?.length
    ? project.images
    : project.image
    ? [project.image]
    : ['/placeholder.jpg'];

  const [currentImage, setCurrentImage] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const hasCarousel = imageList.length > 1;
  const canExpand = (project.description?.length ?? 0) > 180;

  // ✅ AUTOPLAY: cambiar imagen cada 4 segundos
  useEffect(() => {
    if (!hasCarousel) return; // Solo si hay más de una imagen
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageList.length);
    }, 4000); // 4000 ms = 4 segundos
    
    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, [hasCarousel, imageList.length]); // Dependencias

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % imageList.length);
  };
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  const handleExpandToggle = () => {
    setIsExpanded((prev) => {
      const next = !prev;

      if (next) {
        track('Project Interest', {
          action: 'expand_card',
          projectId: project.id,
          projectTitle: project.title ?? project.id,
          projectType: project.type,
        });
      }

      return next;
    });
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: .65, ease: [.22,1,.36,1], delay: (index % 3) * .1 }}
      whileHover={{ y: -4 }}
      className={`relative border border-paper/10 bg-paper/[0.03] hover:bg-paper/[0.06] transition-all cursor-default group overflow-hidden ${
        project.highlight ? 'border-accent/30 shadow-lg shadow-accent/5' : ''
      }`}
    >
      {project.highlight && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent z-20" />
      )}

      {/* Contenedor de imagen con carrusel */}
      <div className="relative w-full h-48 overflow-hidden bg-paper/5 border-b border-paper/10">
        <Image
          src={imageList[currentImage]}
          alt={project.title || 'Project image'}
          fill
          className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Gradiente superior para integrar con la tarjeta */}
        <div className="absolute inset-0 bg-gradient-to-t from-paper/[0.03] to-transparent opacity-60" />

        {/* Controles del carrusel (solo si hay más de una imagen) */}
        {hasCarousel && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full backdrop-blur-sm transition z-10"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full backdrop-blur-sm transition z-10"
              aria-label="Imagen siguiente"
            >
              <ChevronRight size={18} />
            </button>

            {/* Indicadores (puntos) */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
              {imageList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(idx);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === currentImage ? 'bg-accent w-3' : 'bg-white/50'
                  }`}
                  aria-label={`Ir a imagen ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-6">
        {/* Header: icono + año */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-2 rounded ${cfg.bg}`}>
            <Icon className={`w-4 h-4 ${cfg.color}`} />
          </div>
          <span className="text-faint text-xs font-mono">{project.year}</span>
        </div>

        {/* Título y subtítulo */}
        <h3 className="font-serif text-lg text-paper mb-1 leading-tight">{project.title || 'Sin título'}</h3>
        <p className="text-accent text-xs mb-3 tracking-wide uppercase font-medium">{project.subtitle || ''}</p>

        {/* Descripción */}
        <p className={`text-faint text-sm leading-relaxed ${canExpand ? 'mb-2' : 'mb-4'} ${isExpanded ? '' : 'line-clamp-3'}`}>
          {project.description || ''}
        </p>

        {canExpand && (
          <button
            type="button"
            onClick={handleExpandToggle}
            aria-expanded={isExpanded}
            className="mb-4 inline-flex items-center gap-1 text-xs font-medium tracking-wide text-accent hover:text-paper transition-colors"
          >
            {isExpanded ? t('showLess') : t('showMore')}
          </button>
        )}

        {/* KPIs */}
        {project.kpis && (
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6 border-y border-paper/5 py-3">
            {project.kpis.map((k) => (
              <div key={k.label} className="min-w-0">
                <div className="font-serif text-xl text-paper/90 break-words">{k.value}</div>
                <div className="text-accent/60 text-[9px] uppercase tracking-[0.12em] font-bold break-words">
                  {k.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((t) => (
              <span key={t} className="text-[10px] px-2 py-0.5 border border-paper/15 text-faint/80 rounded-sm bg-paper/5">
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Enlaces opcionales */}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-3 border-t border-paper/10">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-accent hover:text-paper transition-colors"
              >
                {link.label}
                <ExternalLink size={12} />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
