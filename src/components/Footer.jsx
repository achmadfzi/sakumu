import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border-color pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-700 flex items-center justify-center shadow-lg shadow-primary/20 overflow-hidden">
                                <img src="/images/logo-putih.svg" alt="Sakumu" className="w-8 h-8 object-contain" />
                            </div>
                            <span className="text-xl font-bold text-foreground">sakumu</span>
                        </div>
                        <p className="text-muted text-sm leading-relaxed mb-6">
                            Asisten keuangan pribadi berbasis AI yang hidup di WhatsApp Anda. Catat, pantau, dan hemat lebih banyak.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/sakumu.id/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background-card flex items-center justify-center text-muted hover:bg-primary hover:text-white transition-all shadow-lg shadow-black/5">
                                <img src="https://simpleicons.org/icons/instagram.svg" alt="Instagram" className="w-4 h-4 dark:invert opacity-70 hover:opacity-100" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-foreground font-bold mb-6">Produk</h4>
                        <ul className="space-y-4 text-sm text-muted">
                            <li><a href="#features" className="hover:text-primary transition-colors">Fitur</a></li>
                            <li><a href="#pricing" className="hover:text-primary transition-colors">Harga</a></li>
                            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-muted">
                            <li><Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border-color pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
                    <p>&copy; 2026 sakumu AI. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span>Made with ❤️ in Jakarta</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
