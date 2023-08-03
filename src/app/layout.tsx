import '../styles/globals.css';
import '../styles/animations.css';
import '../styles/resize.css';
import type { Metadata } from 'next';
// import { NextSeo } from 'next-seo';

export const metadata: Metadata = {
  title: 'Disco Elysium Skill Editor',
  description: 'A fan-made app mimicking the skills page from Disco Elysium.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta name='theme-color' content='#d7441a' />
      </head>
      <body className='md:text-xl'>{children}</body>
    </html>
  );
}
