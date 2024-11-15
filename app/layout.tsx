import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Gam3THub',
  description: 'Web3 Gaming Hub | ETH Global Bangkok',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Header />
        {children}
        <Footer /> {/* Add Footer Here */}
      </body>
    </html>
  );
}
