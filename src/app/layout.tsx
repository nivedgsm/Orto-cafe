import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Orto Café | Coffee, brunch & a little pause in Jumeirah',
  description: 'Find your moment at Orto Café, Jumeirah. Specialty coffee, brunch and a calm canal-side setting in Dubai.',
  keywords: ['Orto Cafe','Dubai cafe','Jumeirah coffee','Dubai canal cafe','specialty coffee Dubai'],
  openGraph: { title: 'Orto Café — A slower kind of coffee moment', description: 'Specialty coffee, thoughtful plates and canal-side calm in Jumeirah, Dubai.', type: 'website' }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
