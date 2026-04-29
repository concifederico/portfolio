'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/routing';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'es' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#111]/80 backdrop-blur-md border-b border-paper/10">
      <div className="max-w-7xl mx-auto px-8 md:px-20 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-serif text-xl text-accent">
            Federico S. Conci
          </Link>
          <button
            onClick={toggleLanguage}
            className="md:hidden text-xs text-accent border border-accent/30 px-3 py-1 rounded hover:bg-accent/10 transition-colors"
          >
            {locale === 'en' ? t('spanish') : t('english')}
          </button>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/proyectos" className="text-sm text-paper/70 hover:text-paper transition-colors">
              {t('projects')}
            </Link>
            <Link href="/cv" className="text-sm text-paper/70 hover:text-paper transition-colors">
              {t('cv')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="text-sm text-accent border border-accent/30 px-3 py-1 rounded hover:bg-accent/10 transition-colors"
            >
              {locale === 'en' ? t('spanish') : t('english')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
