import '../styles/globals.css';
import '../styles/animations.css';
import '../styles/resize.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disco Elysium Skill Editor',
  description:
    'An unofficial, fan-made site which mimics the attributes and skills page from Disco Elysium.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='md:text-xl'>{children}</body>
    </html>
  );
}
