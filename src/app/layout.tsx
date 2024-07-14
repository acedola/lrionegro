import type { Metadata } from 'next';
import { inter } from '@/config/fonts';
import { TopMenu } from '@/components/idex';

import './globals.css';

export const metadata: Metadata = {
  title: 'LRN',
  description: 'Lupulos Rio Negro'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
/*className="bg-[url('/imgs/zyro-image.png')]" */
