import { Inter } from '@next/font/google';
import '../styles/globals.css';
const inter = Inter({ subsets: ['latin'] });
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eduardo Andrade | Web Developer',
  description:
    'Freelance Web Developer mainly focused on React, React Native and Node',
  metadata: {
    name: 'facebook-domain-verification',
    content: '0zv6eegwzzqr5tiribzg099utyko1p',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
