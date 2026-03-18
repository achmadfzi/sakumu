import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function FAQ() {
    const faqs = [
        {
            q: "Apa itu sakumu?",
            a: "sakumu adalah layanan pencatatan keuangan yang bisa kamu gunakan langsung lewat WhatsApp. Tanpa aplikasi tambahan, tanpa ribet — cukup chat seperti biasa."
        },
        {
            q: "Apakah data saya aman?",
            a: "Aman. sakumu tidak menyimpan data kamu di database internal. Semua data langsung tercatat di Google Sheet milik kamu, dan kamu memiliki kendali penuh atas file tersebut."
        },
        {
            q: "Apakah tersedia di iPhone dan Android?",
            a: "Ya! Karena berbasis WhatsApp, sakumu bisa digunakan di smartphone apa saja (iOS & Android) yang terinstall WhatsApp."
        },
        {
            q: "Bagaimana jika bot WhatsApp tidak merespon?",
            a: "Jika bot WhatsApp tidak merespon, segera laporkan ke admin agar masalah dapat ditangani secepatnya. Tim kami akan segera memperbaiki kendala tersebut."
        },
        {
            q: "Apakah saya bisa mencatat transaksi secara manual?",
            a: "Bisa! Selain melalui bot WhatsApp, kamu juga dapat mencatat transaksi secara manual langsung di Google Sheet milikmu. Data yang kamu catat manual akan tetap terintegrasi dengan catatan lainnya."
        },
        {
            q: "Mengapa link Google Sheet yang saya terima kosong?",
            a: "Jika kamu meminta link Google Sheet melalui chatbot WhatsApp dan mendapat respon link kosong, cukup ulangi chat kamu kepada chatbot. Biasanya bot akan memberikan link yang benar pada percobaan berikutnya."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-24 bg-background border-t border-border-color" id="faq">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <h2 className="text-3xl font-bold text-foreground mb-4">Pertanyaan Umum</h2>
                        <p className="text-muted">Masih bingung? Cari jawabanmu di sini.</p>
                    </ScrollReveal>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div
                                className="bg-background-card border border-border-color rounded-2xl overflow-hidden transition-all duration-300 hover:border-black/10 dark:hover:border-white/10 shadow-lg shadow-black/5"
                            >
                                <button
                                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <span className="font-medium text-foreground">{faq.q}</span>
                                    <span className={`material-symbols-outlined text-muted transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                        expand_more
                                    </span>
                                </button>
                                <div
                                    className={`px-6 text-muted overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    {faq.a}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
