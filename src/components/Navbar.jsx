import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-color bg-background/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-700 flex items-center justify-center shadow-lg shadow-primary/20 overflow-hidden">
                        <img src="/images/logo-putih.svg" alt="Sakumu" className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground">sakumu</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <a className="text-sm font-bold text-muted hover:text-primary transition-colors" href="#features">Fitur</a>
                    <a className="text-sm font-bold text-muted hover:text-primary transition-colors" href="#pricing">Harga</a>
                    <a className="text-sm font-bold text-muted hover:text-primary transition-colors" href="#faq">FAQ</a>
                </nav>

                {/* CTA & Theme Toggle */}
                <div className="flex items-center gap-4">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-background-card text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        aria-label="Toggle Theme"
                    >
                        <span className="material-symbols-outlined text-[20px]">
                            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>

                    <a href="#pricing"
                        className="hidden md:flex h-10 px-6 items-center justify-center rounded-full bg-primary text-background-dark text-sm font-bold hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(37,212,102,0.3)] transition-all transform hover:-translate-y-0.5">
                        Beli Sekarang
                    </a>

                    {/* Mobile Menu Icon */}
                    <button
                        className="md:hidden text-foreground p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="material-symbols-outlined">
                            {isOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border-color shadow-2xl animate-fade-in-down">
                    <div className="p-6 flex flex-col gap-4">
                        <a
                            href="#features"
                            className="text-base font-bold text-muted hover:text-primary py-2 border-b border-border-color"
                            onClick={() => setIsOpen(false)}
                        >
                            Fitur
                        </a>
                        <a
                            href="#pricing"
                            className="text-base font-bold text-muted hover:text-primary py-2 border-b border-border-color"
                            onClick={() => setIsOpen(false)}
                        >
                            Harga
                        </a>
                        <a
                            href="#faq"
                            className="text-base font-bold text-muted hover:text-primary py-2 border-b border-border-color"
                            onClick={() => setIsOpen(false)}
                        >
                            FAQ
                        </a>
                        <a
                            href="#pricing"
                            className="h-12 flex items-center justify-center rounded-xl bg-primary text-background-dark font-bold hover:bg-primary/90 transition-all mt-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Beli Sekarang
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
