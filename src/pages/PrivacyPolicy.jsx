import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function PrivacyPolicy() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="relative flex min-h-screen w-full flex-col font-display bg-background text-foreground selection:bg-primary selection:text-black">
            {/* Navbar */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-color bg-background/80 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-700 flex items-center justify-center shadow-lg shadow-primary/20 overflow-hidden">
                            <img src="/images/logo-putih.svg" alt="Sakumu" className="w-8 h-8 object-contain" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-foreground">sakumu</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-background-card text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            <span className="material-symbols-outlined text-[20px]">
                                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>
                        <Link to="/"
                            className="hidden md:flex h-10 px-6 items-center justify-center rounded-full bg-primary text-background-dark text-sm font-bold hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(37,212,102,0.3)] transition-all transform hover:-translate-y-0.5">
                            Kembali ke Beranda
                        </Link>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                            <span className="material-symbols-outlined text-[18px]">lock</span>
                            Dokumen Legal
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-muted text-lg">
                            Terakhir diperbarui: 1 April 2026
                        </p>
                    </div>

                    {/* Privacy Content */}
                    <div className="space-y-6">
                        {[
                            {
                                icon: 'database',
                                title: 'Pengumpulan Data',
                                content: 'Sakumu mengumpulkan data yang diberikan secara langsung oleh pengguna untuk keperluan analisis dan peningkatan kualitas layanan.'
                            },
                            {
                                icon: 'receipt_long',
                                title: 'Jenis Data yang Dikumpulkan',
                                content: 'Data yang dikumpulkan dapat mencakup informasi transaksi, kebiasaan keuangan, dan data relevan lainnya yang dibutuhkan untuk analisis.'
                            },
                            {
                                icon: 'block',
                                title: 'Perlindungan Data',
                                content: 'Sakumu tidak menjual, menyewakan, atau memperdagangkan data pengguna kepada pihak ketiga.'
                            },
                            {
                                icon: 'security',
                                title: 'Keamanan Penyimpanan',
                                content: 'Data pengguna disimpan dengan upaya keamanan untuk mencegah akses, penggunaan, atau pengungkapan yang tidak sah.'
                            },
                            {
                                icon: 'timer',
                                title: 'Retensi Data',
                                content: 'Data hanya digunakan selama layanan berlangsung atau selama masih diperlukan untuk tujuan layanan.'
                            },
                            {
                                icon: 'analytics',
                                title: 'Penggunaan Data Agregat',
                                content: 'Sakumu dapat menggunakan data secara agregat (tanpa identitas) untuk pengembangan layanan ke depan.'
                            },
                            {
                                icon: 'cloud_sync',
                                title: 'Pemrosesan Digital',
                                content: 'Pengguna memahami bahwa penggunaan layanan melibatkan pemrosesan data secara digital.'
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group p-6 rounded-2xl bg-background-card border border-border-color hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                            >
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <span className="material-symbols-outlined text-primary text-[20px]">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-foreground font-bold mb-2">{item.title}</h3>
                                        <p className="text-muted text-sm leading-relaxed">{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Back to Home */}
                    <div className="mt-16 pt-8 border-t border-border-color flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-muted text-sm">
                            Dengan menggunakan Sakumu, Anda menyetujui seluruh kebijakan privasi di atas.
                        </p>
                        <Link
                            to="/terms-of-service"
                            className="text-primary text-sm font-semibold hover:underline flex items-center gap-1"
                        >
                            Baca Terms of Service
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="bg-background border-t border-border-color py-8">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
                    <p>&copy; 2026 sakumu AI. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy-policy" className="text-primary font-semibold">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
