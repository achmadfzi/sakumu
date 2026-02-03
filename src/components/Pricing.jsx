import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Pricing() {
    return (
        <section className="py-24 bg-background relative overflow-hidden" id="pricing">
            {/* Background Decorative Blobs */}
            <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

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

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
                    {/* Free Plan */}
                    <ScrollReveal delay={0.2} className="h-full">
                        <div className="bg-background-card/50 backdrop-blur-sm border border-border-color rounded-[2.5rem] p-10 flex flex-col hover:border-primary/20 transition-all duration-500 h-full group">
                            <div className="mb-8">
                                <h3 className="text-sm font-bold tracking-[0.2em] text-muted mb-4 uppercase">FREE TRIAL</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-bold text-foreground">Rp 0</span>
                                </div>
                            </div>
                            <ul className="space-y-5 mb-10 flex-1">
                                <li className="flex items-center gap-4 text-muted/90 group-hover:text-foreground transition-colors">
                                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-full text-lg">check</span>
                                    Gratis 7 hari akses penuh
                                </li>
                                <li className="flex items-center gap-4 text-muted/90 group-hover:text-foreground transition-colors">
                                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-full text-lg">check</span>
                                    Bisa hapus & update transaksi
                                </li>
                                <li className="flex items-center gap-4 text-muted/90 group-hover:text-foreground transition-colors">
                                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-full text-lg">check</span>
                                    Laporan Mingguan otomatis
                                </li>
                            </ul>
                            <a href="http://lynk.id/achmadfzidev/gn9y1479kppl/checkout" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-4 rounded-2xl border border-border-color text-foreground font-bold hover:bg-foreground hover:text-background transition-all duration-300">
                                Mulai Sekarang
                            </a>
                        </div>
                    </ScrollReveal>

                    {/* Pro Plan */}
                    <ScrollReveal delay={0.4} className="h-full">
                        <div className="bg-background-card border-2 border-primary rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden shadow-[0_0_80px_rgba(37,212,102,0.15)] h-full group scale-[1.02]">
                            <div className="absolute top-0 right-0 bg-primary text-background-dark text-[10px] font-black tracking-widest px-4 py-1.5 rounded-bl-2xl uppercase">
                                RECOMMENDED
                            </div>
                            <div className="mb-8">
                                <h3 className="text-sm font-bold tracking-[0.2em] text-primary mb-4 uppercase">LIFETIME ACCESS</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-bold text-foreground">Rp 150.000</span>
                                </div>
                                <p className="text-muted mt-2 text-sm italic">*Sekali bayar untuk selamanya</p>
                            </div>
                            <ul className="space-y-5 mb-10 flex-1">
                                <li className="flex items-center gap-4 text-foreground/90 font-medium">
                                    <span className="material-symbols-outlined text-background-dark bg-primary p-1.5 rounded-full text-lg">star</span>
                                    Unlimited WhatsApp Chat
                                </li>
                                <li className="flex items-center gap-4 text-foreground/90">
                                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-full text-lg">mic</span>
                                    Pencatatan Pakai Teks, Foto & Voice Note
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
                            <button className="w-full py-5 rounded-2xl bg-primary text-background-dark font-black text-lg hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/30 relative group/btn">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Beli Sekarang
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </span>
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
