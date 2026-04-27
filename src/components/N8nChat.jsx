import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export const N8nChat = () => {
    useEffect(() => {
        createChat({
            webhookUrl: 'https://n8n-vb8dzgfp0pbn.jkt5.sumopod.my.id/webhook/845ffd2e-f3af-4f49-bfc4-f15498e9ed74/chat',
            mode: 'window',
            showWelcomeScreen: false,
            loadPreviousSession: false,
            defaultLanguage: 'en',
            initialMessages: [
                'Halo! 👋',
                'Ada yang bisa saya bantu?',
            ],
            i18n: {
                en: {
                    title: 'Chat dengan Kami 💬',
                    subtitle: 'Kami siap membantu Anda 24/7.',
                    footer: '',
                    getStarted: 'Mulai Percakapan',
                    inputPlaceholder: 'Ketik pesan Anda...',
                },
            },
        });
    }, []);

    return (<div></div>);
};

export default N8nChat;
