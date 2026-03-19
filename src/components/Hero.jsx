import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
    return (
        <main className="flex-grow pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden min-h-screen">
            {/* Background Glow Effects */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[80px] pointer-events-none will-change-transform"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[80px] pointer-events-none will-change-transform"
            />

            <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
                {/* Left Column: Copy & Action */}
                <div className="flex flex-col gap-8 max-w-2xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
                    <ScrollReveal delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background-card border border-border-color w-fit mx-auto lg:mx-0 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-xs font-medium text-muted tracking-wide uppercase">AI Powered Finance</span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-foreground">
                            Catat Keuangan <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Semudah Chatting</span> <br />
                            dengan Teman
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <p className="text-lg text-muted leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Tidak perlu aplikasi ribet. Cukup chat ke WhatsApp, AI kami akan mencatat, mengkategorikan, dan mengatur budgetmu secara otomatis dalam hitungan detik.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <a href="#pricing"
                                className="h-14 px-8 rounded-full bg-primary text-background-dark text-base font-bold hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(37,212,102,0.4)] transition-all w-full sm:w-auto flex items-center justify-center gap-2 group pointer-events-auto cursor-pointer">
                                Coba Sekarang
                                <svg className="w-5 h-5 fill-current group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                </svg>
                            </a>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.5}>
                        <div className="flex items-center gap-6 justify-center lg:justify-start pt-4 border-t border-border-color mt-4">
                            <ul className="flex flex-row flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 sm:gap-6 text-xs sm:text-sm font-medium text-muted">
                                <li className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    Gratis Selamanya
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    Tanpa Aplikasi Tambahan
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    Responsif
                                </li>
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Right Column: Phone Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 50, rotate: -2 }}
                    animate={{ opacity: 1, x: 0, rotate: -2 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
                    className="relative flex justify-center lg:justify-end perspective-1000"
                >
                    {/* Glow behind phone */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-600/30 blur-[40px] rounded-full transform scale-90 translate-y-10 will-change-transform"></div>

                    {/* Phone Frame */}
                    <div className="relative w-[320px] h-[650px] bg-[#1a1a1a] border-[8px] border-[#2a2a2a] rounded-[3rem] shadow-2xl overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-all duration-500 z-10">
                        {/* Dynamic Island / Notch area */}
                        <div className="absolute top-0 inset-x-0 h-6 bg-[#2a2a2a] z-30 rounded-b-2xl w-32 mx-auto"></div>

                        {/* Screen */}
                        <div className="w-full h-full bg-whatsapp-dark flex flex-col relative">
                            {/* WhatsApp Header */}
                            <div className="bg-whatsapp-dark px-4 pt-10 pb-3 flex items-center gap-3 border-b border-gray-800 z-20">
                                <span className="material-symbols-outlined text-primary">arrow_back</span>
                                <div className="relative">
                                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-emerald-700 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                                        D
                                    </div>
                                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-primary border-2 border-whatsapp-dark rounded-full"></div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white text-sm font-semibold flex items-center gap-1">
                                        sakumu
                                        <span className="material-symbols-outlined text-primary text-[14px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                    </h3>
                                    <p className="text-[10px] text-gray-400">Business Account</p>
                                </div>
                                <span className="material-symbols-outlined text-gray-400 text-[20px]">videocam</span>
                                <span className="material-symbols-outlined text-gray-400 text-[20px] ml-2">call</span>
                            </div>

                            {/* Chat Background Pattern */}
                            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWR4Z6JB8XyIqo3cvRxaCqsvTna3GezCvjRlgroZUPP-GPFB_xAAoyH7VDREYIgDrLe4oYF1o2VCX2K7f4W3CKqQX29a6-khviWBNo50DSQQhpq7OFv3yO8q4hUtINnUrRCjT51li6rTGjsFRRwYGkewlQAh30n_qhoHX4iFKLbRYj1eEJxqoBOyJcVbTIy_LQuqUXHIt-eF1Rf4ltmtBuTYKdwu113D7cecnchCmOxMLCvMtUgtZO0ettywDt6Ie29eS1lTZuNA')" }}></div>

                            {/* Chat Area */}
                            <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto z-10 no-scrollbar">
                                {/* Date Divider */}
                                <div className="flex justify-center my-2">
                                    <span className="bg-[#1f2c34] text-[#8696a0] text-[10px] px-3 py-1 rounded-lg shadow-sm font-medium uppercase tracking-wide">Hari Ini</span>
                                </div>

                                {/* Bot Message (Welcome) */}
                                <div className="flex flex-col gap-1 max-w-[85%] self-start animate-fade-in">
                                    <div className="bg-whatsapp-bubble-in p-3 rounded-lg rounded-tl-none shadow-sm relative">
                                        <p className="text-white text-[13px] leading-relaxed">
                                            Halo! Mau catat pengeluaran apa hari ini? 🤖
                                        </p>
                                        <span className="text-[10px] text-[#8696a0] float-right mt-1 ml-2">10:45</span>
                                    </div>
                                </div>

                                {/* User Message */}
                                <div className="flex flex-col gap-1 max-w-[85%] self-end animate-slide-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                                    <div className="bg-whatsapp-bubble-out p-3 rounded-lg rounded-tr-none shadow-sm relative text-white">
                                        <p className="text-[13px] leading-relaxed">
                                            Tadi beli kopi 25rb
                                        </p>
                                        <div className="flex items-center justify-end gap-1 mt-1">
                                            <span className="text-[10px] text-emerald-100/70">10:46</span>
                                            <span className="material-symbols-outlined text-[12px] text-emerald-100">done_all</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bot Message (Response) */}
                                <div className="flex flex-col gap-1 max-w-[90%] self-start animate-slide-up" style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
                                    <div className="bg-whatsapp-bubble-in p-3 rounded-lg rounded-tl-none shadow-sm relative">
                                        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-700">
                                            <div className="bg-green-500/20 p-1 rounded">
                                                <span className="material-symbols-outlined text-green-500 text-[16px]">check_circle</span>
                                            </div>
                                            <span className="text-green-500 font-bold text-xs">Tercatat Sukses!</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center text-[12px]">
                                                <span className="text-gray-400">Kategori</span>
                                                <span className="text-white font-medium bg-gray-700/50 px-2 py-0.5 rounded text-[10px]">☕ F&B</span>
                                            </div>
                                            <div className="flex justify-between items-center text-[12px]">
                                                <span className="text-gray-400">Nominal</span>
                                                <span className="text-white font-medium">Rp 25.000</span>
                                            </div>
                                            <div className="w-full h-[1px] bg-gray-700 my-1"></div>
                                            <div className="flex justify-between items-center text-[12px]">
                                                <span className="text-gray-400">Sisa Budget</span>
                                                <span className="text-primary font-bold">Rp 50.000</span>
                                            </div>
                                        </div>
                                        <span className="text-[10px] text-[#8696a0] float-right mt-2">10:46</span>
                                    </div>
                                </div>
                            </div>

                            {/* Input Area */}
                            <div className="bg-whatsapp-dark px-2 py-2 flex items-center gap-2 z-20">
                                <div className="bg-[#1f2c34] p-2 rounded-full text-gray-400 hover:text-white cursor-pointer transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">add</span>
                                </div>
                                <div className="flex-1 bg-[#1f2c34] rounded-full px-4 py-2 text-sm text-white flex justify-between items-center">
                                    <span className="text-gray-500">Ketik pesan...</span>
                                    <span className="material-symbols-outlined text-gray-500 text-[20px]">sticky_note_2</span>
                                </div>
                                <div className="bg-primary p-2.5 rounded-full text-background-dark shadow-lg">
                                    <span className="material-symbols-outlined text-[20px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
                                </div>
                            </div>

                            {/* Home Indicator */}
                            <div className="h-5 w-full bg-whatsapp-dark absolute bottom-0 z-30 flex justify-center items-center rounded-b-[2.5rem]">
                                <div className="w-32 h-1 bg-gray-500 rounded-full mb-2"></div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements/Decorations */}
                    <div className="absolute -right-8 top-1/4 bg-background-card p-3 rounded-2xl shadow-xl border border-white/5 z-20 hidden lg:block animate-float">
                        <span className="material-symbols-outlined text-yellow-400 text-3xl">savings</span>
                    </div>
                    <div className="absolute -left-4 bottom-1/4 bg-background-card p-3 rounded-2xl shadow-xl border border-white/5 z-20 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
                        <span className="material-symbols-outlined text-blue-400 text-3xl">analytics</span>
                    </div>
                </motion.div>
            </div>
            <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-slide-up {
          animation: slideUp 0.5s ease-out;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
        </main>
    );
}
