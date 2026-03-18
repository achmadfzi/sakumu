import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function HowItWorks() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                            Cara Kerja <span className="text-primary">Sangat Simpel</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <p className="text-muted max-w-2xl mx-auto text-lg">
                            Tidak perlu install aplikasi tambahan. Gunakan WhatsApp yang sudah ada di HP Anda sekarang.
                        </p>
                    </ScrollReveal>
                </div>

                <ScrollReveal delay={0.2}>
                    <div className="max-w-5xl mx-auto">
                        <div className="rounded-3xl overflow-hidden border border-border-color shadow-2xl shadow-black/10">
                            <video
                                className="w-full h-auto"
                                loop
                                autoPlay
                                muted
                                playsInline
                                preload="metadata"
                            >
                                <source src="/video/how it work sakumu.mp4" type="video/mp4" />
                                Browser Anda tidak mendukung pemutaran video.
                            </video>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
