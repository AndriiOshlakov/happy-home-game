import type { Metadata } from 'next';
import { DM_Sans, Nunito } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Happy Home',
  description: 'Happy Home - Merge & Design',
  icons: { icon: '/Favicon.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${nunito.variable}`}>{children}</body>
    </html>
  );
}
