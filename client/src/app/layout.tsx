import type { Metadata } from 'next';
import { Poppins, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const poppins = Poppins({
    weight: ['200', '300', '400', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
});

const cormorant = Cormorant_Garamond({
    weight: ['300', '400', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-cormorant',
});

export const metadata: Metadata = {
    title: 'Souvenote',
    description: 'A card worth keeping',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${poppins.className} ${poppins.variable} ${cormorant.variable} bg-[var(--bg-cream)] text-[var(--text-primary)]`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
