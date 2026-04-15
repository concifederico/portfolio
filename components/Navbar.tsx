'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const links = [
  { href: '/',           label: 'Inicio' },
  { href: '/proyectos',  label: 'Proyectos' },
  { href: '/cv',         label: 'Currículum' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#111]/90 backdrop-blur-md border-b border-paper/10' : ''
      }`}
    >
      <nav className="flex items-center justify-between px-8 md:px-20 py-5">
        {/* Logo */}
        <Link href="/" className="font-serif text-xl text-paper hover:text-accent transition-colors">
          Federico S. Conci
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors ${
                pathname === l.href ? 'text-accent' : 'text-faint hover:text-paper'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/Federico Conci.pdf"
            download
            className="flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-xs px-4 py-2 tracking-widest uppercase hover:bg-accent/20 transition-colors"
          >
            <Download className="w-3 h-3" /> CV PDF
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-paper"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#111] border-t border-paper/10 px-8 py-6 flex flex-col gap-5"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-base transition-colors ${
                  pathname === l.href ? 'text-accent' : 'text-faint'
                }`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="/Federico Conci.pdf"
              download
              className="flex items-center gap-2 text-accent text-sm mt-2"
            >
              <Download className="w-4 h-4" /> Descargar CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
