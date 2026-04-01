import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function TermsOfService() {
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
                            <span className="material-symbols-outlined text-[18px]">gavel</span>
                            Dokumen Legal
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-muted text-lg">
                            Terakhir diperbarui: 1 April 2026
                        </p>
                    </div>

                    {/* Terms Content */}
                    <div className="space-y-6">
                        {[
                            {
                                icon: 'smart_toy',
                                title: 'Layanan Berbasis AI',
                                content: 'Sakumu merupakan layanan berbasis kecerdasan buatan (AI) yang dirancang untuk membantu pengguna dalam menganalisis dan memahami kondisi keuangan secara lebih terstruktur.'
                            },
                            {
                                icon: 'info',
                                title: 'Bukan Pengganti Penasihat Profesional',
                                content: 'Layanan Sakumu tidak dimaksudkan sebagai pengganti penasihat keuangan profesional, perencana keuangan, maupun bentuk konsultasi ahli lainnya.'
                            },
                            {
                                icon: 'verified_user',
                                title: 'Tanggung Jawab Pengguna',
                                content: 'Pengguna bertanggung jawab penuh untuk memastikan bahwa seluruh data yang diberikan adalah benar, akurat, dan sesuai dengan kondisi sebenarnya.'
                            },
                            {
                                icon: 'shield',
                                title: 'Keamanan Data',
                                content: 'Data pengguna digunakan semata-mata untuk keperluan analisis layanan dan tidak akan dibagikan kepada pihak ketiga tanpa persetujuan pengguna.'
                            },
                            {
                                icon: 'payments',
                                title: 'Kebijakan Pembayaran',
                                content: 'Setiap pembayaran yang telah dilakukan bersifat final dan tidak dapat dibatalkan maupun dikembalikan.'
                            },
                            {
                                icon: 'inventory',
                                title: 'Akses Layanan',
                                content: 'Akses layanan diberikan sesuai dengan paket yang dipilih oleh pengguna dan mengikuti ketentuan yang berlaku.'
                            },
                            {
                                icon: 'schedule',
                                title: 'Masa Berlaku Layanan',
                                content: 'Akses layanan berlaku selama Sakumu masih tersedia dan aktif untuk digunakan oleh pengguna.'
                            },
                            {
                                icon: 'warning',
                                title: 'Batasan Tanggung Jawab',
                                content: 'Sakumu tidak bertanggung jawab atas keputusan finansial yang diambil pengguna berdasarkan hasil analisis atau rekomendasi yang diberikan.'
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
                            Dengan menggunakan Sakumu, Anda menyetujui seluruh ketentuan di atas.
                        </p>
                        <Link
                            to="/privacy-policy"
                            className="text-primary text-sm font-semibold hover:underline flex items-center gap-1"
                        >
                            Baca Privacy Policy
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
                        <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="text-primary font-semibold">Terms of Service</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
