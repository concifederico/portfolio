'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Download, Users, Zap, Cpu, Box, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useLocale, useMessages, useTranslations } from 'next-intl';

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

type CvMessages = {
  cv?: {
    profile?: {
      tag?: string;
      description?: string;
    };
  };
};

export default function CVPage() {
  const locale = useLocale();
  const t = useTranslations('cv');
  const messages = useMessages() as CvMessages;
  const profile = messages.cv?.profile ?? {};
  const cvFile = locale === 'en' ? '/Federico Conci_en.pdf' : '/Federico Conci.pdf';

  return (
    <main className="min-h-screen bg-[#111] text-paper">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 px-8 md:px-20 border-b border-paper/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.p {...fadeUp(0)} className="section-tag mb-3">{t('title')}</motion.p>
            <motion.h1 {...fadeUp(.1)} className="font-serif text-5xl md:text-6xl leading-tight">
              Federico S. Conci
            </motion.h1>
            <motion.p {...fadeUp(.2)} className="text-accent mt-2 tracking-widest text-sm uppercase">
              {t('subtitle')}
            </motion.p>
          </div>
          <motion.a
            {...fadeUp(.3)}
            href={cvFile}
            download
            className="flex items-center gap-3 border border-accent/40 text-accent px-6 py-3 text-sm hover:bg-accent/10 transition-colors self-start md:self-auto"
          >
            <Download className="w-4 h-4" />
            {t('downloadPDF')}
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
          <p className="section-tag mb-4">{profile.tag ?? ''}</p>
          <p className="text-paper/70 text-lg leading-relaxed max-w-3xl" dangerouslySetInnerHTML={{ __html: profile.description ?? '' }} />
        </motion.section>

        {/* KPIs */}
        <motion.div {...fadeUp(.1)} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-6 border border-paper/10 bg-paper/[0.03]">
          {[
            { icon: Users,     val: '16',    label: t('kpi.team') },
            { icon: TrendingUp,val: '×3',    label: t('kpi.upgrades') },
            { icon: Box,       val: '3D',    label: t('kpi.prototyping') },
            { icon: Cpu,       val: 'Dev',  label: t('kpi.web') },
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
          <p className="section-tag mb-8">{t('experience.tag')}</p>

          {/* Empleo actual */}
          <div className="relative pl-6 border-l border-accent/30 mb-10">
            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-accent" />
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-1">
              <h3 className="font-serif text-xl text-paper">{t('experience.currentJob.title')}</h3>
              <span className="text-faint text-sm whitespace-nowrap">{t('experience.currentJob.date')}</span>
            </div>
            <p className="text-accent text-sm mb-4">{t('experience.currentJob.company')}</p>
            <ul className="space-y-2">
              {t.raw('experience.currentJob.responsibilities').map((item: string, idx: number) => (
                <li key={idx} className="flex gap-3 text-paper/60 text-sm leading-relaxed">
                  <span className="text-accent mt-1.5 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Empleo anterior 1 */}
          <div className="relative pl-6 border-l border-paper/15 mb-10">
            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-paper/20" />
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-1">
              <h3 className="font-serif text-xl text-paper">{t('experience.previousJob1.title')}</h3>
              <span className="text-faint text-sm">{t('experience.previousJob1.date')}</span>
            </div>
            <p className="text-accent/80 text-sm mb-4">{t('experience.previousJob1.company')}</p>
            <ul className="space-y-2">
              {t.raw('experience.previousJob1.responsibilities').map((item: string, idx: number) => (
                <li key={idx} className="flex gap-3 text-paper/60 text-sm leading-relaxed">
                  <span className="text-paper/20 mt-1.5 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Empleo anterior 2 */}
          <div className="relative pl-6 border-l border-paper/15 mb-10">
            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-paper/20" />
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-1">
              <h3 className="font-serif text-xl text-paper">{t('experience.previousJob2.title')}</h3>
              <span className="text-faint text-sm">{t('experience.previousJob2.date')}</span>
            </div>
            <p className="text-accent/80 text-sm mb-4">{t('experience.previousJob2.company')}</p>
            <ul className="space-y-2">
              {t.raw('experience.previousJob2.responsibilities').map((item: string, idx: number) => (
                <li key={idx} className="flex gap-3 text-paper/60 text-sm leading-relaxed">
                  <span className="text-paper/20 mt-1.5 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Competencias */}
        <motion.section {...fadeUp(.2)} className="mb-16">
          <p className="section-tag mb-8">{t('skills.tag')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {t.raw('skills.groups').map((group: any, idx: number) => (
              <div key={idx}>
                <h4 className="text-accent text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 opacity-80">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag: string) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Educación */}
        <motion.section {...fadeUp(.25)} className="mb-16">
          <p className="section-tag mb-8">{t('education.tag')}</p>
          <div className="space-y-8">
            {t.raw('education.items').map((item: any, idx: number) => (
              <div key={idx} className="flex flex-col md:flex-row justify-between gap-1 border-b border-gray-800 pb-4">
                <div>
                  <h3 className="font-serif text-lg text-paper">{item.title}</h3>
                  <p className="text-faint text-sm">{item.institution}</p>
                  {item.extra && <p className="text-faint text-xs mt-2 opacity-80">{item.extra}</p>}
                </div>
                <span className="text-faint text-sm whitespace-nowrap">{item.date}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section {...fadeUp(.3)} className="border-t border-paper/10 pt-12">
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href={cvFile}
              download
              className="flex items-center justify-center gap-2 bg-accent text-paper px-8 py-4 text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              {t('cta.download')}
            </a>
            <a
              href="mailto:concifederico@gmail.com"
              className="flex items-center justify-center gap-2 border border-paper/20 text-paper/70 px-8 py-4 text-sm hover:border-paper/50 hover:text-paper transition-colors"
            >
              {t('cta.email')}
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
