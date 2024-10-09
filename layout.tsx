import { AppStateProvider } from 'app-state';
import './globals.css';
import Providers from './providers';

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  let loc = params.locale ?? 'nl';
  if (loc !== 'nl' && loc !== 'en') {
    loc = 'nl';
  }

  return (
    <html lang={loc}>
      <body className="min-h-screen relative">
        <div className="h-full">
          <AppStateProvider>
            <Providers>{children}</Providers>
          </AppStateProvider>
        </div>
      </body>
    </html>
  );
}
