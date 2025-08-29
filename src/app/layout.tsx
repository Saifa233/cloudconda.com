import {Fira_Sans} from 'next/font/google';
import { Bodoni_Moda } from 'next/font/google';
import './globals.css'

const bodoni = Bodoni_Moda({
  weight: '600',
  subsets: ['latin'],
});

const fira = Fira_Sans({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: 'Cloudconda',
    template: '',
  },
  icons: {
    icon: '/assets/logo.png'
  },
  verification: {
    google: 'w6YyHXDSoyLBe3h9sXTl_lnuv42llEEAfWGyuy8UaWk',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fira.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
