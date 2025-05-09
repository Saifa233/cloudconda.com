import {Bodoni_Moda} from 'next/font/google';
import './globals.css'

const bodoni = Bodoni_Moda({
  weight: '600',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bodoni.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
