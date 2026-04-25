'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Download, Users, Zap, Cpu, Box, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true },
  transition: { duration: .6, ease: [.22,1,.36,1], delay },
});

function Tag({ children }: { children: string }) {
  return (
    <span className="text-[11px] px-3 py-1 border border-paper/15 text-faint/80 rounded-full">
      {children}
    </span>
  );
}

export default function CVPage() {
  return (
    <main className="min-h-screen bg-[#111] text-paper">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 px-8 md:px-20 border-b border-paper/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.p {...fadeUp(0)} className="section-tag mb-3">Currículum Vitae</motion.p>
            <motion.h1 {...fadeUp(.1)} className="font-serif text-5xl md:text-6xl leading-tight">
              Federico S. Conci
            </motion.h1>
            <motion.p {...fadeUp(.2)} className="text-accent mt-2 tracking-widest text-sm uppercase">
              Ing. Químico · Jefe de Sector Mantenimiento · Bagley Argentina
            </motion.p>
          </div>
          <motion.a
            {...fadeUp(.3)}
            href="/Federico Conci.pdf"
            download
            className="flex items-center gap-3 border border-accent/40 text-accent px-6 py-3 text-sm hover:bg-accent/10 transition-colors self-start md:self-auto"
          >
            <Download className="w-4 h-4" />
            Descargar PDF
          </motion.a>
        </div>
          <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.2 }}
    className="relative w-full max-w-2xl overflow-hidden rounded-xl group mt-8"
  >
    <Image
  src="/images/foto.png"
  alt="Federico Conci"
  width={0}
  height={0}
  sizes="100vw"
  className="w-52 h-52 rounded-lg transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
/>
  </motion.div>
      </section>


      <div className="px-8 md:px-20 py-16 max-w-5xl">


        {/* Perfil */}
        <motion.section {...fadeUp(0)} className="mb-16">
          <p className="section-tag mb-4">Perfil</p>
          <p className="text-paper/70 text-lg leading-relaxed max-w-3xl">
            Ingeniero Químico Especialista en Calidad con trayectoria integral en mantenimiento industrial de alta velocidad
            y desarrollo de mejoras en plantas de alimentos. Actualmente a cargo del sector de mecánica
            envasado y taller central de mecanizados y soldaduras en{' '}
            <strong className="text-paper">Bagley Argentina (Grupo Arcor)</strong>. Combino gestión de
            equipos con metodologías ágiles, prototipado en 3D y automatización de procesos.
            Con la convicción de ejecutar mejoras concretas basadas en{' '}
            <strong className="text-accent">ingeniería aplica a procesos técnicos y de gestión</strong>.
          </p>
        </motion.section>

        {/* KPIs */}
        <motion.div {...fadeUp(.1)} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-6 border border-paper/10 bg-paper/[0.03]">
          {[
            { icon: Users,     val: '16',    label: 'Personas a cargo' },
            { icon: TrendingUp,val: '×3',    label: 'Upgrades end-of-line' },
            { icon: Box,       val: '3D',    label: 'Prototipado ágil' },
            { icon: Cpu,       val: 'Next',  label: 'Stack web personal' },
          ].map(({ icon: Icon, val, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <div className="p-3 bg-accent/10 rounded">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <span className="font-serif text-3xl text-accent">{val}</span>
              <span className="text-faint text-xs uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Experiencia */}
        <motion.section {...fadeUp(.15)} className="mb-16">
          <p className="section-tag mb-8">Experiencia Profesional</p>

          {/* Job actual */}
          <div className="relative pl-6 border-l border-accent/30 mb-10">
            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-accent" />
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-1">
              <h3 className="font-serif text-xl text-paper">
                Jefe de Sector – Mantenimiento Mecánico Envasado & Taller Central
              </h3>
              <span className="text-faint text-sm whitespace-nowrap">Abr 2022 – Presente</span>
            </div>
            <p className="text-accent text-sm mb-4">Bagley Argentina S.A. – Grupo Arcor · Planta de Galletas, Córdoba</p>
            <ul className="space-y-2">
              {[
                'Conducción de 16 personas: mecánicos, torneros y soldadores, con gestión del ciclo completo de mantenimiento (preventivo, predictivo y correctivo).',
                'Responsable del taller central especializado en mecanizados y soldaduras, garantizando disponibilidad de maquinaria de alta velocidad.',
                'Liderazgo de 3 operaciones de upgrade de equipos end-of-line completos, desde especificación técnica hasta comisionado y puesta en marcha (GTP).',
                'Participación en el Pilar de Mejoras de Planta con injerencia directa en grupos de mejora enfocada (GME).',
                'Implementación de metodologías ágiles con impresoras 3D y prototipado rápido aplicado al mantenimiento.',
                'Gestión multidisciplinaria de mantenimiento electrónico y desarrollo de algoritmos de PLC/HMI para automatización de líneas de envasado.',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-paper/60 text-sm leading-relaxed">
                  <span className="text-accent mt-1.5 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Rol anterior - Producción / Procesos */}
          <div className="relative pl-6 border-l border-paper/15 mb-10">
            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-paper/20" />
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-1">
              <h3 className="font-serif text-xl text-paper">Jefe de Sector Producción / Ing. de Procesos</h3>
              <span className="text-faint text-sm">Jul 2015 – Abr 2022</span>
            </div>
            <p className="text-accent/80 text-sm mb-4">Bagley Argentina S.A. – Grupo Arcor</p>
            <ul className="space-y-2">
              {[
                'Gestión operativa de 5 líneas de producción de alta velocidad con un equipo de más de 100 colaboradores a cargo.',
                'Liderazgo en la Gestión Temprana de Proyectos (GTP) para el montaje de nuevas líneas y optimización de procesos térmicos.',
                'Implementación de estándares de Calidad y Seguridad Alimentaria bajo normativas del Sistema de Gestión Integrado (SGI).',
                'Análisis de mermas y optimización de OEE mediante la estandarización de procesos de fabricación.',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-paper/60 text-sm leading-relaxed">
                  <span className="text-paper/20 mt-1.5 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Trayectoria previa - Oil & Gas */}
          <div className="relative pl-6 border-l border-paper/15 mb-10">
            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-paper/20" />
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-1">
              <h3 className="font-serif text-xl text-paper">Field Engineer Senior</h3>
              <span className="text-faint text-sm">May 2007 – Jul 2015</span>
            </div>
            <p className="text-accent/80 text-sm mb-4">Halliburton & Schlumberger Argentina</p>
            <ul className="space-y-2">
              {[
                'Soporte técnico y ventas de servicios especializados en pozos de petróleo y gas (Vaca Muerta y cuencas convencionales).',
                'Estudios de factibilidad técnica para la aplicación de nuevas tecnologías en condiciones críticas de operación.',
                'Gestión de auditorías internas bajo normas ISO y procesos de calidad SIG.',
                'Coordinación de logística y recursos en campo para operaciones de alta complejidad técnica.',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-paper/60 text-sm leading-relaxed">
                  <span className="text-paper/20 mt-1.5 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>
        

        {/* Skills / Competencias */}
<motion.section {...fadeUp(.2)} className="mb-16">
  <p className="section-tag mb-8">Competencias</p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
    {[
      {
        title: 'Ingeniería de Desarrollo & Innovación',
        tags: [
          'Gestión Temprana de Proyectos (GTP)',
          'Prototipado Rápido (3D Printing)',
          'Diseño Paramétrico CAD',
          'Metodologías Ágiles',
          'Pilar de Mejora Enfocada (GME)',
          'Lean Manufacturing',
          'Simulación de Procesos'
        ],
      },
      {
        title: 'Tecnología & Automatización',
        tags: [
          'Algoritmos de Control',
          'Visión Computarizada (OpenCV)',
          'PLC / HMI (Programación)',
          'Electrónica de Envasado',
          'Instrumentación Industrial',
          'Mantenimiento Electrónico',
          'Sistemas de Visión Artificial'
        ],
      },
      {
        title: 'Fullstack & Software Engineering',
        tags: [
          'Next.js / React',
          'TypeScript / JavaScript',
          'Python (Automation)',
          'Node.js',
          'Tailwind CSS',
          'Git / GitHub',
          'Software de Gestión (CMMS)',
          'Integración de APIs'
        ],
      },
      {
        title: 'Gestión Industrial & Calidad',
        tags: [
          'Liderazgo de Equipos (16+ pax)',
          'Maquinaria de Alta Velocidad',
          'Upgrades de Final de Línea',
          'Normativas de Calidad (SGI)',
          'Seguridad Alimentaria (BPM)',
          'Gestión de Proveedores OEM',
          'Análisis de Causa Raíz (RCA)'
        ],
      },
    ].map((group) => (
      <div key={group.title}>
        <h4 className="text-accent text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 opacity-80">
          {group.title}
        </h4>
        <div className="flex flex-wrap gap-2">
          {group.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    ))}
  </div>
</motion.section>

        {/* Educación */}
<motion.section {...fadeUp(.25)} className="mb-16">
  <p className="section-tag mb-8">Educación</p>
  <div className="space-y-8">
    
    {/* Posgrado */}
    <div className="flex flex-col md:flex-row justify-between gap-1 border-b border-gray-800 pb-4">
      <div>
        <h3 className="font-serif text-lg text-paper">Especialización en Ingeniería en Calidad</h3>
        <p className="text-faint text-sm">Universidad Tecnológica Nacional (UTN - FRC)</p>
      </div>
      <span className="text-faint text-sm whitespace-nowrap">2015–2016</span>
    </div>

    {/* Título de Grado */}
    <div className="flex flex-col md:flex-row justify-between gap-1 border-b border-gray-800 pb-4">
      <div>
        <h3 className="font-serif text-lg text-paper">Ingeniero Químico</h3>
        <p className="text-faint text-sm">Universidad Nacional de Córdoba (FCEFYN)</p>
        <p className="text-faint text-xs mt-2 opacity-80">
          Promedio: 8.97 | Egresado Distinguido UNC | Instructor de laboratorio
        </p>
      </div>
      <span className="text-faint text-sm whitespace-nowrap">2002–2007</span>
    </div>

    {/* Formación IT */}
    <div className="flex flex-col md:flex-row justify-between gap-1">
      <div>
        <h3 className="font-serif text-lg text-paper">Formación en Desarrollo Web & Software</h3>
        <p className="text-faint text-sm">Argentina Programa (#SeProgramar) · Formación Autodidacta</p>
        <p className="text-faint text-xs mt-2 opacity-80">
          Next.js · React · Vercel · Python · OpenCV
        </p>
      </div>
      <span className="text-faint text-sm whitespace-nowrap">2021–Presente</span>
    </div>

  </div>
</motion.section>

        {/* CTA */}
        <motion.section {...fadeUp(.3)} className="border-t border-paper/10 pt-12">
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="/Federico Conci.pdf"
              download
              className="flex items-center justify-center gap-2 bg-accent text-paper px-8 py-4 text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Descargar CV en PDF
            </a>
            <a
              href="mailto:concifederico@gmail.com"
              className="flex items-center justify-center gap-2 border border-paper/20 text-paper/70 px-8 py-4 text-sm hover:border-paper/50 hover:text-paper transition-colors"
            >
              Contacto por email
            </a>
          </div>
        </motion.section>

      </div>
    </main>
  );
}
