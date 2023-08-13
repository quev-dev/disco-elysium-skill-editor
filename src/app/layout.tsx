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
      <head>
        <meta name='theme-color' content='#d7441a' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='450' />
        <meta property='og:image:height' content='400' />
        <meta property='og:image' content='https://i.imgur.com/rjH9UI7.png' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:image:type' content='image/png' />
        <meta name='twitter:image:width' content='450' />
        <meta name='twitter:image:height' content='400' />
        <meta name='twitter:image' content='https://i.imgur.com/rjH9UI7.png' />
      </head>
      <body className='md:text-xl'>{children}</body>
    </html>
  );
}
