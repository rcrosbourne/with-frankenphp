import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
    ],
     server: {
        hmr: {
            protocol: 'wss',
            host: 'laravel-starter-template.ddev.site',
        },
        host: '0.0.0.0',
        strictPort: true,
        // dev server port
        port: 3000,
        // SSR server port
        // port: 13714,
    },
});
