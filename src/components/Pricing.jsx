import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Pricing() {
    return (
        <section className="py-20 md:py-24 bg-background relative overflow-hidden" id="pricing">
            {/* Background Decorative Blobs */}
            <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[80px] pointer-events-none will-change-transform" />
            <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[80px] pointer-events-none will-change-transform" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <ScrollReveal>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-foreground tracking-tight">
                            Investasi Kecil, <span className="text-primary">Hemat Banyak</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">Mulai kelola keuanganmu dengan lebih cerdas lewat WhatsApp.</p>
                    </ScrollReveal>
                </div>

                <div className="flex justify-center max-w-5xl mx-auto items-stretch">
                    {/* Pro Plan */}
                    <ScrollReveal delay={0.4} className="w-full max-w-md">
                        <div className="bg-background-card border-2 border-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col relative overflow-hidden shadow-[0_0_60px_rgba(37,212,102,0.1)] h-full">
                            {/* Recommended Corner Badge */}
                            <div className="absolute top-0 right-0 bg-primary text-background-dark text-[10px] font-black tracking-widest px-4 py-1.5 rounded-bl-2xl uppercase">
                                RECOMMENDED
                            </div>

                            {/* Header */}
                            <div className="mb-6">
                                <h3 className="text-xs font-bold tracking-[0.15em] text-primary uppercase">LIFETIME ACCESS</h3>
                            </div>

                            {/* Pricing */}
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-red-400 text-xs font-bold tracking-wide uppercase bg-red-500/10 px-2.5 py-1 rounded-full">🔥 Promo 50 User Pertama</span>
                                </div>
                                <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                                    <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">Rp 99.000</span>
                                    <span className="text-base sm:text-lg text-muted line-through opacity-50">Rp 199.000</span>
                                </div>
                                <p className="text-muted mt-1.5 text-xs sm:text-sm">Sekali bayar, akses selamanya</p>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-border/30 mb-6" />

                            {/* Features */}
                            <ul className="space-y-3.5 mb-8 flex-1">
                                <li className="flex items-center gap-3 text-sm sm:text-base text-foreground/90">
                                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                                    Unlimited WhatsApp Chat
                                </li>
                                <li className="flex items-center gap-3 text-sm sm:text-base text-foreground/90">
                                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                                    Catat via Teks, Foto, PDF & Voice Note
                                </li>
                                <li className="flex items-center gap-3 text-sm sm:text-base text-foreground/90">
                                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                                    Akses Semua Fitur Tanpa Batas
                                </li>
                                <li className="flex items-center gap-3 text-sm sm:text-base text-foreground/90">
                                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                                    Dashboard Google Sheet
                                </li>
                            </ul>

                            {/* CTA Button */}
                            <a href="http://lynk.id/sakumu/lo5l17j253g8/checkout" target="_blank" rel="noopener noreferrer" className="block w-full py-4 rounded-xl bg-primary text-background-dark font-bold text-base hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 text-center no-underline">
                                <span className="flex items-center justify-center gap-2">
                                    Beli Sekarang
                                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                                </span>
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
