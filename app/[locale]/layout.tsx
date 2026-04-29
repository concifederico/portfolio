import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans } from 'next/font/google';
import '../../styles/globals.css';
import { Analytics } from '@vercel/analytics/next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Federico S. Conci – Ing. Químico Especialista en Calidad · Mantenimiento & Desarrollo',
  description:
    'Portfolio profesional: Ingeniero Químico. Bagley Argentina – Grupo Arcor.',
  keywords: [
    'ingeniero mecánico','ingeniero químico', 'mantenimiento industrial', 'galletas Bagley', 'Arcor',
    'desarrollo de nuevos productos', 'automatización', 'mejora continua', 'TPM', 'Next.js',
  ],
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
