import { Inter } from '@next/font/google';
import '../styles/globals.css';
import Head from './head';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <Head />
      <body>{children}</body>
    </html>
  );
}
