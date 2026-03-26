import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Pricing() {
    return (
        <section className="py-24 bg-background relative overflow-hidden" id="pricing">
            {/* Background Decorative Blobs */}
            <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[80px] pointer-events-none will-change-transform" />
            <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[80px] pointer-events-none will-change-transform" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
                            Investasi Kecil, <span className="text-primary">Hemat Banyak</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <p className="text-lg text-muted max-w-2xl mx-auto">Pilih paket yang sesuai dengan kebutuhan pencatatan keuanganmu. Mulai kelola uang dengan lebih cerdas.</p>
                    </ScrollReveal>
                </div>

                <div className="flex justify-center max-w-5xl mx-auto items-stretch">
                    {/* Pro Plan */}
                    <ScrollReveal delay={0.4} className="w-full max-w-md">
                        <div className="bg-background-card border-2 border-primary rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden shadow-[0_0_80px_rgba(37,212,102,0.15)] h-full group scale-[1.02]">
                            <div className="absolute top-0 right-0 bg-primary text-background-dark text-[10px] font-black tracking-widest px-4 py-1.5 rounded-bl-2xl uppercase">
                                RECOMMENDED
                            </div>
                            <div className="mb-8">
                                <h3 className="text-sm font-bold tracking-[0.2em] text-primary mb-4 uppercase">LIFETIME ACCESS</h3>
                                {/* Promo Badge */}
                                <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 rounded-full px-4 py-1.5 mb-4" style={{ animation: 'pulse-promo 2s ease-in-out infinite' }}>
                                    <span className="text-red-400 text-xs font-black tracking-wider uppercase">🔥 PROMO TERBATAS</span>
                                </div>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-5xl font-bold text-foreground">Rp 99.000</span>
                                    <span className="text-xl text-muted line-through opacity-60">Rp 199.000</span>
                                </div>
                                <p className="text-muted mt-2 text-sm italic">*Sekali bayar untuk selamanya</p>
                                {/* Urgency Text */}
                                <div className="mt-3 flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-xl px-4 py-2.5">
                                    <span className="text-lg" style={{ animation: 'fire-bounce 1s ease-in-out infinite' }}>🔥</span>
                                    <span className="text-yellow-400 text-sm font-bold">Hanya untuk 50 pendaftar pertama!</span>
                                </div>
                            </div>
                            {/* Inline keyframes */}
                            <style>{`
                                @keyframes pulse-promo {
                                    0%, 100% { opacity: 1; transform: scale(1); }
                                    50% { opacity: 0.85; transform: scale(1.03); }
                                }
                                @keyframes fire-bounce {
                                    0%, 100% { transform: translateY(0); }
                                    50% { transform: translateY(-3px); }
                                }
                            `}</style>
                            <ul className="space-y-5 mb-10 flex-1">
                                <li className="flex items-center gap-4 text-foreground/90 font-medium">
                                    <span className="material-symbols-outlined text-background-dark bg-primary p-1.5 rounded-full text-lg">star</span>
                                    Unlimited WhatsApp Chat
                                </li>
                                <li className="flex items-center gap-4 text-foreground/90">
                                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-full text-lg">mic</span>
                                    Pencatatan Pakai Teks, Foto, PDF & Voice Note
                                </li>
                                <li className="flex items-center gap-4 text-foreground/90">
                                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-full text-lg">bolt</span>
                                    Akses Semua Fitur Tanpa Batas
                                </li>
                                <li className="flex items-center gap-4 text-foreground/90">
                                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-full text-lg">grid_view</span>
                                    Akses Dashboard Google Sheet
                                </li>
                            </ul>
                            <a href="http://lynk.id/sakumu/lo5l17j253g8/checkout" target="_blank" rel="noopener noreferrer" className="block w-full py-5 rounded-2xl bg-primary text-background-dark font-black text-lg hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/30 relative group/btn text-center no-underline">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Beli Sekarang
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </span>
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
